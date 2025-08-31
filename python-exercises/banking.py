import csv

def search(first_name=None, last_name=None, address=None, tax_id=None):
    """
    Searches a list of person records for dictionaries matching the given search criteria.
    
    Returns:
    list of dict: A list of dictionaries representing person records that match the input criteria.
    """
    
    # Load the CSV data
    with open('/home/coderpad/data/people.csv', mode='r') as file:
        reader = csv.DictReader(file)
        data = list(reader)
    
    # Print the data to verify it's loaded correctly
    print("Data loaded from CSV:")
    for record in data:
        print(record)
    
    # Filter records based on provided keyword arguments
    result = []
    for item in data:
        # Extract and normalize values
        item_first_name = item.get("First Name", "").strip().lower()
        item_last_name = item.get("Last Name", "").strip().lower()
        item_address = item.get("Address", "").strip().lower()
        item_tax_id = item.get("Tax ID", "").strip().lower()
        
        # Normalize search criteria
        search_first_name = first_name.strip().lower() if first_name else None
        search_last_name = last_name.strip().lower() if last_name else None
        search_address = address.strip().lower() if address else None
        search_tax_id = tax_id.strip().lower() if tax_id else None
        
        # Print to debug each item and criteria
        print(f"Checking item: {item}")
        print(f"Normalized values - item: ({item_first_name}, {item_last_name}, {item_address}, {item_tax_id})")
        print(f"Search criteria - ({search_first_name}, {search_last_name}, {search_address}, {search_tax_id})")
        
        # Filter logic
        if (search_first_name is None or item_first_name == search_first_name) and \
           (search_last_name is None or item_last_name == search_last_name) and \
           (search_address is None or item_address == search_address) and \
           (search_tax_id is None or item_tax_id == search_tax_id):
            result.append(item)
            print(f"Match found: {item}")
        else:
            print(f"Not a match: {item}")
    
    return result

# Test cases
print(search(first_name='manny', last_name='macho'))

# Define the expected results for assertions
result = [
    {
        'First Name': 'Manny',
        'Last Name': 'Macho',
        'Address': '123 Harvard Ave, Somerville, MA, 02114',
        'Tax ID': '387123897'
    }
]
assert(search(first_name='manny', last_name='macho') == result)
assert(search(first_name='MANNY', last_name='MACHO') == result)

result = [
    {
        'First Name': 'Boris',
        'Last Name': 'Lincoln',
        'Address': '111 Haskell Hall, Medford, MA 02155',
        'Tax ID': '321659876'
    },
    {
        'First Name': 'Donna',
        'Last Name': 'Lincoln',
        'Address': '111 Haskell Hall, Medford, MA 02155',
        'Tax ID': '334561468'
    }    
]
assert(search(last_name='LinColN') == result)

assert(search(tax_id='924620110')[0]['Last Name'] == 'Fox')

assert(search(address='1986 Diagon Alley') == [])
assert(search(first_name='Richard', last_name='Fox', tax_id='0') == [])

assert(search(first_name="First Name") == [])

assert(len(search()) == 9)

