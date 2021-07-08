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