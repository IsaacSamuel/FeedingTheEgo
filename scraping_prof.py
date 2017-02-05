from bs4 import BeautifulSoup
from urllib.request import urlopen
import requests
import sys

def get_links_to_papers(url):
    category_links = []
    url = open("./page1.html").read()
    soup = BeautifulSoup(url, "lxml")

    for link in soup.findAll("a", attrs={"target" : "_top", "class":"textLink"}):
        category_links.append(link['href'])

    url = open("./page2.html").read()
    soup = BeautifulSoup(url, "lxml")
    for link in soup.findAll("a", attrs={"target" : "_top", "class":"textLink"}):
        category_links.append(link['href'])
    return category_links

def get_abstracts(abstract_url):

    r = requests.get(abstract_url).content
    soup = BeautifulSoup(r, "lxml")

    abstract = str(soup.findAll(attrs={"id" : "innerWhite" }))


    with open ("output.html", "a") as f:
        f.write(abstract)
        
    return abstract

def write_to_html(papers):
    with open ("output.html", "a") as f:
        for abstract in papers:
            f.write(abstract)

def main(argv):
    count = 0
    papers = []
    links_to_papers = get_links_to_papers("https://papers.ssrn.com/sol3/results.cfm")
    for link in links_to_papers:
        papers.append(get_abstracts(link))
        count += 1
        print(count)


    print("Printed to output.html!")

    

if __name__ == "__main__":
    main(sys.argv)
