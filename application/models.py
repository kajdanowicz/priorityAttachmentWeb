from index import db, bcrypt
import networkx as nx

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


class Network:
    # siec wygenerowana

    g = None
    size = 10
    distance='random'

    def __init__(self, size, distance):
        self.g=nx.barabasi_albert_graph(size, 1)
        self.size = size

    def getNetwork(self):
        return nx.node_link_data(self.g, {'link': 'edges', 'source': 'from', 'target': 'to'})


    def getDegreeDistr(self):
        deg = nx.degree(self.g)
        return [i[1] for i in deg]

    def getShortestPathDist(self):
        sp = nx.shortest_path(g)
        lens = [len(j) for i in sp for j in sp[i].values()]
        # plt.hist(lens)
        return lens

    def getClusteringCoeffDist(self):
        clust = nx.clustering(g)
        clust_val = list(clust.values())
        # plt.hist(clust_val)
        return clust_val
