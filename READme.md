# Documentação

## Iniciar Software


1. `npm install`
2. `npm start`


## API Usuários

Modelo:
```
id: Number
name: String
email: String
password: String
token: String
```

### GET /users
```
{
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "admin",
            "email": "admin@example.com",
            "password": "a66abb5684c45962d887564f08346e8d",
            "token": null
        }
    ]
}
```

### GET /users/:id
```
{
    "code": 200,
    "message": "success",
    "data": {
        "id": 1,
        "name": "admin",
        "email": "admin@example.com",
        "password": "a66abb5684c45962d887564f08346e8d",
        "token": null
    }
}
```

### POST /users
Body:
```
{
    "name": "admin",
    "email": "admin@example.com",
    "password": "admin123456",
}
```

Output:
```
{
    "id": 1,
    "name": "admin",
    "email": "admin@example.com",
    "password": "a66abb5684c45962d887564f08346e8d",
    "token": null
}
```

### PUT /users/:id
Body:
```
{
    "name": "admin",
    "email": "admin@example.com",
    "password": "admin123456"
}
```

Output:
```
{
    "id": 1,
    "name": "admin",
    "email": "admin@example.com",
    "password": "a66abb5684c45962d887564f08346e8d",
    "token": null
}
```

### DELETE /users/:id
```
{
    "message": "deleted."
}
```


## API Filmes

Modelo:
```
name: String
genre: String
release_date: String
```

### GET /movies
```
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "Panico",
      "genre": "Terror",
      "release_date": "20/03/2022"
    }
  ]
}
```

### GET /movies/:id
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Panico",
        "genre": "Terror",
        "release_date": "20/03/2022"
    }
}
```

### POST /movies
Body:
```
{
    "name": "Panico",
    "genre": "Terror",
    "release_date": "20/03/2022"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Panico",
        "genre": "Terror",
        "release_date": "20/03/2022"
    }
}
```

### PUT /movies/:id
Body:
```
{
    "name": "Panico",
    "genre": "Terror",
    "release_date": "20/03/2022"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Panico",
        "genre": "Terror",
        "release_date": "20/03/2022"
    }
}
```

### DELETE /movies/:id
```
{
    "message": "deleted."
}
```

## API Elenco

Modelo:
```
id: Number
name: String
gender: String
character: String
```

### GET /casts
```
{
  "code": 200,
  "message": "success",
  "data": [
    {
        "id": 1,
        "name": "Ryan Reynolds",
        "gender": "M",
        "character": "Lanterna Verde"
    }
  ]
}
```

### GET /casts/:id
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Ryan Reynolds",
        "gender": "M",
        "character": "Lanterna Verde"
    }
}
```

### POST /casts
Body:
```
{
    "name": "Ryan Reynolds",
    "gender": "M",
    "character": "Lanterna Verde"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Ryan Reynolds",
        "gender": "M",
        "character": "Lanterna Verde"
    }
}
```

### PUT /casts/:id
Body:
```
{
    "name": "Ryan Reynolds",
    "gender": "M",
    "character": "Lanterna Verde"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Ryan Reynolds",
        "gender": "M",
        "character": "Lanterna Verde"
    }
}
```

### DELETE /casts/:id
```
{
    "message": "deleted"
}
```

## API Diretor

Modelo:
```
id: Number
name: String
gender: String
```

### GET /directors
```
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "James Wan",
      "gender": "M"
    }
  ]
}
```

### GET /directors/:id
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "James Wan",
        "gender": "M"
    }
}
```

### POST /directors
Body:
```
{
    "name": "James Wan",
    "gender": "M"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "James Wan",
        "gender": "M"
    }
}
```

### PUT /directors/:id
Body:
```
{
    "name": "James Wan",
    "gender": "M"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "James Wan",
        "gender": "M"
    }
}
```

### DELETE /directors/:id
```
{
    "message": "deleted"
}
```