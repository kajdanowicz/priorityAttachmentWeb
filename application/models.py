from index import db, bcrypt
import networkx as nx
import numpy as np
from collections import Counter
import operator

class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))

    def __init__(self, email, password):
        self.email = email
        self.active = True
        self.password = User.hashed_password(password)

    @staticmethod
    def hashed_password(password):
        return bcrypt.generate_password_hash(password)

    @staticmethod
    def get_user_with_email_and_password(email, password):
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        else:
            return None


class Network1:
    # siec wygenerowana

    g = None
    size = 10
    distance = 'random'
    k = 1

    def getProbabilityOfRanking(self, size):
        prob = [1 / (sum([1 / float(k) for k in range(1, size)]) * i) for i in range(1, size)]
        return prob

    def generateDistanceMatrix(self, size, distance):
        distanceMatrix = []
        if (distance == 'random'):
            distanceMatrix = np.random.uniform(low=0.0, high=1.0, size=(size, size))
        elif(distance == 'degree'):
            distanceMatrix = np.ones(shape=(size,size))


        return distanceMatrix

    def generateRankings(self, distanceMatrix):
        np.fill_diagonal(distanceMatrix, 2)
        rankMatrix = np.argsort(-distanceMatrix)
        return rankMatrix[:, 1:]

    def sampleFromRankMat(self, rankMat, k, size):
        res = np.zeros((size, k))
        for i in range(rankMat.shape[0]):
            res[i, :] = list(np.random.choice(rankMat[i], size=k, replace=False, p=self.getProbabilityOfRanking(size)))
        return res

    def generateEdges(self, sampledRank, size):
        nodeIds = range(size)
        edges = [[i[0], int(i[1][j])] for i in zip(nodeIds, sampledRank) for j in range(len(i[1]))]
        return edges

    def __init__(self, size=50, distance='random', k=2):
        self.distance = distance
        self.size = size
        self.k = k
        self.g = nx.empty_graph(self.size, create_using=nx.Graph())
        self.g.add_edges_from(self.generateEdges(
            self.sampleFromRankMat(self.generateRankings(self.generateDistanceMatrix(size, distance)), k,
                                   size), size))

    def getNetwork(self):
        return nx.node_link_data(self.g, {'link': 'edges', 'source': 'from', 'target': 'to'})

    # def getNetwork(self):
    #     return nx.node_link_data(self.g, {'link': 'edges', 'source': 'from', 'target': 'to'})

    def getDegreeDistr(self):
        deg = nx.degree(self.g)
        deg_val = [i[1] for i in deg]

        a = self.discrete_histogram(deg_val)
        a = list(map(lambda x: {'x': x[0], 'y': x[1]}, a.items()))
        print(a)
        return a

    def getShortestPathDist(self):
        sp = nx.shortest_path(self.g)
        lens = [len(j) for i in sp for j in sp[i].values()]

        a = self.discrete_histogram(lens)
        a = list(map(lambda x: {'x': x[0], 'y': x[1]}, a.items()))

        # a = np.histogram(lens, bins=np.max(lens), range=(0, np.max(lens)))
        # return list(map(lambda x: {'x': x[0], 'y': x[1]}, list(zip(list(a[1]), [0] + list(a[0])))))
        return a

    def getClusteringCoeffDist(self):
        clust = nx.clustering(self.g.to_undirected())
        clust_val = list(clust.values())

        a = np.histogram(clust_val, bins=10)  # 'doane')
        return list(
            map(lambda x: {'x': float("{0:.2f}".format(x[0])), 'y': x[1]}, list(zip(list(a[1]), [0] + list(a[0])))))

    def discrete_histogram(self, data):
        hist = Counter(data)
        hist = dict(hist)
        # for i in range(min(data)):
        #     hist.update({i: 0})
        for i in range(max(data)):
            if(i not in hist):
                hist.update({i: 0})
        return hist


class Network:

    g = None
    size = 10
    distance = 'random'
    k = 1

    def getProbabilityOfRanking(self, size):
        prob = [1 / (sum([1 / float(k) for k in range(1, size)]) * i) for i in range(1, size)]
        return prob

    def generateDistanceMatrix(self, size, distance):
        distanceMatrix = []
        if (distance == 'random'):
            distanceMatrix = np.random.uniform(low=0.0, high=1.0, size=(size, size))
        elif (distance == 'degree'):
            distanceMatrix = np.ones(shape=(size, size))

        return distanceMatrix


    def __init__(self, size=50, distance='random', k=2):
        self.distance = distance
        self.size = size
        self.k = k
        self.g = nx.empty_graph(self.size, create_using=nx.DiGraph())
        #         self.g.add_edges_from(self.generateEdges(
        #             self.sampleFromRankMat(self.generateRankings(self.generateDistanceMatrix(size, distance)), k,
        #                                    size), size))
        self.generateIterativelyEdges()

    def getNetwork(self):
        return nx.node_link_data(self.g, {'link': 'edges', 'source': 'from', 'target': 'to'})

    # def getNetwork(self):
    #     return nx.node_link_data(self.g, {'link': 'edges', 'source': 'from', 'target': 'to'})

    def getDegreeDistr(self):
        deg = nx.degree(self.g)
        deg_val = [i[1] for i in deg]

        a = self.discrete_histogram(deg_val)
        a = list(map(lambda x: {'x': x[0], 'y': x[1]}, a.items()))
        return a

    def getShortestPathDist(self):
        sp = nx.shortest_path(self.g)
        lens = [len(j) for i in sp for j in sp[i].values()]

        a = self.discrete_histogram(lens)
        a = list(map(lambda x: {'x': x[0], 'y': x[1]}, a.items()))

        # a = np.histogram(lens, bins=np.max(lens), range=(0, np.max(lens)))
        # return list(map(lambda x: {'x': x[0], 'y': x[1]}, list(zip(list(a[1]), [0] + list(a[0])))))
        return a

    def getClusteringCoeffDist(self):
        clust = nx.clustering(self.g.to_undirected())
        clust_val = list(clust.values())

        a = np.histogram(clust_val, bins=10)  # 'doane')
        return list(
            map(lambda x: {'x': float("{0:.2f}".format(x[0])), 'y': x[1]}, list(zip(list(a[1]), [0] + list(a[0])))))

    def discrete_histogram(self, data):
        hist = Counter(data)
        hist = dict(hist)
        # for i in range(min(data)):
        #     hist.update({i: 0})
        for i in range(max(data)):
            if (i not in hist):
                hist.update({i: 0})
        return hist

    def calculateDistance(self, distance, node_i, node_j):
        result = None
        if (distance == 'random'):
            result = np.random.uniform(low=0.0, high=1.0, size=1)[0]
        elif (distance == 'degree'):
            # print(self.g.degree(node_j))
            result = 1/(self.g.degree(node_j)+0.001)
        elif (distance == 'betweenness'):
            bet=(nx.betweenness_centrality(self.g, k=int(len(list(self.g.nodes)) / 10)))
            result = 1/(bet[node_j]+0.001)
            #TODO zrobic optymalizacje ze zwracane jest k wartosci
        elif (distance == 'closseness'):
            result=1/(nx.closeness_centrality(self.g,u=node_j)+0.001)
        elif (distance == 'page_rank'):
            pag=nx.pagerank_scipy(self.g)
            result = 1 / (pag[node_j] + 0.001)
        return result

    def getRandomNode(self):
        return np.random.choice(list(self.g.nodes), size=1)[0]

    def calculateDistances(self, distance, currentNode):
        distances = {}
        for i in self.g.nodes:
            # print("edge in network", (currentNode, i) in self.g.edges)
            if (i == currentNode or (currentNode, i) in self.g.edges):
                # print("not addind distance",i,currentNode)
                continue
            else:
                distances[i] = self.calculateDistance(distance, currentNode, i)

        return {currentNode: distances}

    def generateRanking(self, distances):
        x = distances.values()[0]
        sorted_x = sorted(x.items(), key=operator.itemgetter(1))
        return sorted_x

    def sampleFromRankMat(self, rankingDistance):
        # rankMat2 = rankMat[wichInTurn + 1:]

        rankingDistance = [i[0] for i in rankingDistance]
        #         print(len(rankMat2))
        #         print(self.getProbabilityOfRanking(len(rankMat2)))
        res = np.random.choice(rankingDistance, size=1, replace=False, p=self.getProbabilityOfRanking(len(rankingDistance) + 1))[0]
        return res

    def generateIterativelyEdges(self):
        for i in range(self.size):
            for j in range(self.k):
                if (len(list(self.g.edges)) < 1):
                    self.g.add_edge(i, self.getRandomNode())
                else:
                    #                     print("i: "+str(i)+" j: "+str(j))
                    dist = self.calculateDistances(self.distance, i)
                    # print("distances",dist)
                    rank = self.generateRanking(dist)
                    # print("ranking",rank)
                    edgesToAdd = self.sampleFromRankMat(rank)
                    self.g.add_edge(i, edgesToAdd)
                    # print("edges in net",list(self.g.edges))


# struktura dla trzymania odleglosci i rankingow
# {1: {2: 0.34, 3: 0.11}, 2: {3: 0.12}, ...}
