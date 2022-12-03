import requests
import json


def fetchData():
        response = requests.get("https://api.nasa.gov/planetary/apod?api_key=tNhJ9xKv5GoWuqCYm0TEaH2K0yGtV9BpZeTN6guF&date=2021-06-16")
        json = response.json()
        return {"image_url": json['hdurl'], "description": json['explanation'] }


print(fetchData())

