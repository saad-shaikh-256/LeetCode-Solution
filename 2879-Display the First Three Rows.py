# Import the pandas library, commonly used for data manipulation in Python
import pandas as pd

# Define a function that takes a pandas DataFrame named 'employees'
def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
    # Return the first 3 rows of the DataFrame using the .head() method
    return employees.head(3)
