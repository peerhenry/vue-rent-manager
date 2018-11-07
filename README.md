# vue-rent-manager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Rental manager

The goal of this SPA is to create a webapp with which vehicles can be registered by admins and rented out to customers.

#### Functionality

- (Admin) Homepage (todo: content)
- (Admin) Register a vehicle
- (Admin) Edit vehicle
- (Admin) Register a new rental (start date & end date)
- (Admin) Register a reservation for a client
- (Admin) View reservations
- (Admin) Cancel a reservation
- (Admin/User) Overview vehicles
- (Admin/User) View vehicle (vehicle availability calender)
- (User) Homepage (todo: content)
- (User) Register a reservation (start date & end date)
- (User) Cancel a reservation

#### Pages/routes

- /vehicles
- /vehicle/<id>
- /vehicle/new
- /vehicle/edit/<id>
- /reservations
- /reservation/<id>
- /reservation/new
- /reservation/edit/<id>
- /rentals
- /rental/<id>
- /rental/new
- /rental/edit/<id>