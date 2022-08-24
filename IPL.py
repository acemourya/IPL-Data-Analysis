# Importing csv, json, matplotlib and collections module
import csv
import json
from collections import defaultdict


def read_csv():
    """Read csv  and make hashmap by csv data"""

    # Problem: 1
    with open("./deliveries.csv") as file:
        reader = csv.DictReader(file)
        data1 = defaultdict(int)

        for row in reader:
            """Check weather the team present in hashmap or not.
            if no so include it in hashmap and update its value
            by total_run_score"""
            data1[row["batting_team"]] += int(row["total_runs"])

        with open("./assets/data/data1.json", "w") as outfile:
            json.dump(data1, outfile)

    # Problem: 2
    with open("./deliveries.csv") as file:
        reader = csv.DictReader(file)
        teams = defaultdict(int)

        for row in reader:
            """Check "Royal Challengers Bangalore" team present in hashmap or not.
            if no so include it in hashmap and update its value by
            total_run_score"""
            if row["batting_team"] == "Royal Challengers Bangalore":
                teams[row["batsman"]] += int(row["total_runs"])

        scores = sorted(list(teams.values()), reverse=True)[:6]
        data2 = defaultdict(int)
        for v in range(0, 6):
            for k in teams.keys():
                if teams[k] == scores[v]:
                    data2[k] = scores[v]

        with open("./assets/data/data2.json", "w") as outfile:
            json.dump(data2, outfile)

    # Problem: 3
    with open("./matches.csv") as file:
        reader = csv.DictReader(file)
        data3 = defaultdict(int)

        with open("./IPL-umpires.csv") as file:
            umpire_country_data = csv.DictReader(file)
            umpire_country = defaultdict(int)
            for row in umpire_country_data:
                umpire_country[row["umpire"]] = row[" country"]

        for row in reader:
            if row["umpire1"]:
                if umpire_country[row["umpire1"]] != " India":
                    data3[umpire_country[row["umpire1"]]] += 1
                if umpire_country[row["umpire2"]] != " India":
                    data3[umpire_country[row["umpire2"]]] += 1

        with open("./assets/data/data3.json", "w") as outfile:
            json.dump(data3, outfile)

    # Problem: 4
    with open("./matches.csv") as file:
        reader = csv.DictReader(file)
        teams = defaultdict(int)

        """ Check season and team present in hashmap or not.
            if no so include it in hashmap and update its value
            by number of that team occurrence"""
        for row in reader:

            if row["season"] not in teams:
                teams[row["season"]] = defaultdict(int)
                teams[row["season"]][row["team1"]] = 1
                teams[row["season"]][row["team2"]] = 1
            else:
                teams[row["season"]][row["team1"]] += 1
                teams[row["season"]][row["team2"]] += 1

        years = sorted(list(teams.keys()))
        years = years[:9]
        # List of diffrent team names
        team_names = [
            "Royal Challengers Bangalore",
            "Rising Pune Supergiant",
            "Deccan Chargers",
            "Mumbai Indians",
            "Kochi Tuskers Kerala",
            "Delhi Daredevils",
            "Gujarat Lions",
            "Sunrisers Hyderabad",
            "Rajasthan Royals",
            "Pune Warriors",
            "Kolkata Knight Riders",
            "Chennai Super Kings",
            "Kings XI Punjab",
        ]
        # List of number of diffrent team play matches in diffrent season
        team_play_matches = []
        for tm in team_names:

            team_play_matche = []

            for yr in years:
                if int(yr) % 2 == 0:
                    if yr in teams and tm in teams[yr]:
                        team_play_matche.append(teams[yr][tm])
                    else:
                        team_play_matche.append(0)
            team_play_matches.append(team_play_matche)

        data4 = []
        for i in range(len(team_names)):
            data4.append({"name": team_names[i], "data": team_play_matches[i]})

        with open("./assets/data/data4.json", "w") as outfile:
            json.dump(data4, outfile)


if __name__ == "__main__":
    read_csv()
