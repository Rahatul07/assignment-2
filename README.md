# User Management

## Create a new user

#### Endpoint:

```http
  POST /api/users
```

#### Request Body:

```http
  {
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}

```

#### Response:

```http
  {
    "success": true,
    "message": "User created successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}


```

## Retrieve a list of all users

#### Endpoint:

```http
  GET /api/users
```

#### Response:

```http
  {
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "username": "string",
            "fullName": {
                "firstName": "string",
                "lastName": "string"
            },
            "age": "number",
            "email": "string",
            "address": {
                "street": "string",
                "city": "string",
                "country": "string"
            }
        },

    ]
}


```

## Retrieve a specific user by ID

#### Endpoint:

```http
  GET /api/users/:userId
```

#### Response:

```http
  {
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}



```

## Retrieve a specific user by ID

#### Endpoint:

```http
  GET /api/users/:userId
```

#### Response:

```http
  {
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}



```

## Update user information

#### Endpoint:

```http
 PUT /api/users/:userId
```

#### Response:

```http
 {
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
        "fullName": {
            "firstName": "string",
            "lastName": "string"
        },
        "age": "number",
        "email": "string",
        "isActive": "boolean",
        "hobbies": [
            "string",
            "string"
        ],
        "address": {
            "street": "string",
            "city": "string",
            "country": "string"
        }
    }
}

```

## Delete a user

#### Endpoint:

```http
 DELETE /api/users/:userId
```

#### Response:

```http
 {
    "success": true,
    "message": "User deleted successfully!",
    "data": null
}

```

# Order Management

### Add New Product in Order:

If the 'orders' property already exists for a user, append a new product to it. Otherwise, create an 'orders' array within the user object and then add the order data.

### Endpoint:

```http
  PUT /api/users/:userId/orders
```

#### Request Body:

```http
 {
    "productName": "string",
    "price": "number",
    "quantity": "number"
}


```

#### Response:

```http
{
    "success": true,
    "message": "Order created successfully!",
    "data": null
}

```

### Retrieve all orders for a specific user:

### Endpoint:

```http
  GET /api/users/:userId/orders
```

#### Response:

```http
 {
    "success": true,
    "message": "Order fetched successfully!",
    "data": {
        "orders": [
            {
                "productName": "Product 1",
                "price": 23.56,
                "quantity": 2
            },
            {
                "productName": "Product 2",
                "price": 23.56,
                "quantity": 5
            }
        ]
    }
}



```

### Calculate Total Price of Orders for a Specific User:

### Endpoint:

```http
  GET /api/users/:userId/orders/total-price
```

#### Response:

```http
{
    "success": true,
    "message": "Total price calculated successfully!",
    "data": {
        "totalPrice": 454.32
    }
}



```
