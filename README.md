# Java Script Data Project :: IPL Data Analysis 

## Aim -
To convert raw open data (run by run records in this case) into charts.

## Steps to Execute the project
## 1. Clone repository -
Run the following command to clone the repository:
```bash
git clone https://gitlab.com/mountblue/cohort-16-python/anuragm/dataproject-javascript.git
```
After succesfully cloning the repository, change the current directory to dataproject-python by running the following command:
```bash
cd dataproject-javascript
``` 
## 2.  Download DataSet 

>[https://www.kaggle.com/manasgarg/ipl/version/5](https://www.kaggle.com/manasgarg/ipl/version/5)

>[https://www.kaggle.com/anuragmourya/ipldataset?select=IPL-umpires.csv](https://www.kaggle.com/anuragmourya/ipldataset?select=IPL-umpires.csv)

## 3. Set up the virtual environment -
Make sure that virtualenv package is already installed. If not, install it using the following command:
```bash
$ pip3 install virtualenv
```
Now, create the virtual environment:
```bash
$ virtualenv venv -p python3
```
Activate the virtual environment:
```bash
$ source ./venv/bin/activate
```


## 4. Install dependencies - 
Install the requirements for the project using the **requirements.txt** file:
```bash
$ pip3 install -r requirements.txt 
```

## 5. The project - 
There are four problems in the project - 
* Problem 1 - **Total runs scored by team**
* Problem 2 - **Top batsman for Royal Challengers Bangalore**
* Problem 3 - **Foreign umpire analysis**
* Problem 4 - **Stacked chart of matches played by team by season**

## Run the `"*.py"` file by the following commands for diffrent problems :

### For all necessary json data files:

```bash
$ python3 IPL.py
```
### For plotting charts on localhost server

```bash
$ python3 -m http.server
```
Open localhost server address on your browser (Like: http://0.0.0.0:8000/)

There are four charts:

    Problem 1: Chart-1
    Problem 2: Chart-2
    Problem 3: Chart-3
    Problem 4: Chart-4

## 6. Run command into terminal for deactivate virtual enviroment
```bash
$ deactivate
```

## The plotted chart view
To visit [Click here](https://anuraghighcharts.herokuapp.com/)
