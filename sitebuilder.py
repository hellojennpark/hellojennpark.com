import sys

import render

from flask import Flask, render_template
from flask_flatpages import FlatPages
from flask_frozen import Freezer

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = ".md"

app = Flask(__name__)
app.config.from_object(__name__)
app.config["FREEZER_DESTINATION"] = "docs"
pages = FlatPages(app)
freezer = Freezer(app)


@app.route("/")
def index():
    return render.index(pages)


@app.route("/en")
def index_en():
    return render.index(pages)


@app.route("/tag/<string:tag>")
def tag(tag):
    tagged = [p for p in pages if tag in p.meta.get("tags", [])]
    return render_template("tag.html", pages=tagged, tag=tag)


@app.route("/career")
def career():
    return render.career(pages)


@app.route("/<path:path>", strict_slashes=False)
def page(path):
    return render.page(path)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(port=3000)
