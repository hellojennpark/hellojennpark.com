from flask import render_template
from module import summary_under_direcoty, read_markdown


def index(pages):
    about = pages.get("about")
    contact = pages.get("contact")
    education = pages.get("education")
    career_files = summary_under_direcoty("pages/career")
    return render_template(
        "index.html",
        pages=pages,
        data={
            "about": about,
            "contact": contact,
            "education": education,
            "career_files": career_files,
        },
    )


def page(path: str):
    if path == "favicon.ico":
        return "", 204
    if not path.endswith(".md"):
        path = f"{path}.md"
    meatadata, html_content = read_markdown(path)
    return render_template("page.html", content=html_content, meatadata=meatadata)


def career(pages):
    career_files = summary_under_direcoty("pages/career")
    return render_template(
        "career.html",
        pages=pages,
        data={
            "career_files": career_files,
        },
    )
