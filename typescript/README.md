# Car register

**RF**
- It should be possible to register a new car
- It should be possible to list all categories

**RN**
- It should not be possible register a car with a plate already registered
- It should not be possible to update the car plate already registered
- Car should be available by default after register it
- Car only should be registered by an admin user

# List of cars

**RF**
- It should be possible to list all available cars
- It should be possible to list all available cars by category name
- It should be possible to list all available cars by brand name
- It should be possible to list all available cars by name

**RN**
- User does not need to be login

# Specification of car register

**RF**
- It should be possible to register a specification for a car
- It should be possible to list all specifications
- It should be possible to list all cars

**RN**
- It should not be possible to register a specification for an unregistered car
- It should not be possible to register a specification already registered for the same car
- Specification only should be registered by an admin user


# Car's image register

**RF**
- It should be possible to register a car image
- Car's image only should be registered by an admin user

**RNF**
- Use multer to updated files

**RN**
- User should be able to register mode than one image for the same car
- Car's image only should be registered by an admin user

# Cars rent

**RF**
- It should be possible to rent a car

**RNF**


**RN**
- Rent must last 24h
- It should not be possible do register a new rent if user already has a car rented 
- It should not be possible to register a new rent if car is already rented
- User should be logged to rent a car
- After rent a car, car's status should be altered to unavailable

# Return of the rental car

**RF**
- It should be possible to register a new return of a car

**RN**
- If the return time is more than 24 hours, it should be charged daily price
- After return the car, it should be released
- After return the car, user should be released
- If the return time is mora than expected time, it should be charged a fine proportional to the amount of time delayed.
- If there is a fine, it should be added to the total rent. 

# List of rental

**RF**
- It should be possible to find all rental for an user

**RN**
- User should be logged