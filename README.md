# Koderski Zadaci API

## Razvoj

```
npm i
npm run dev
```

Linter popravka:

```
npm run lint
```

## API Dokumentacija

### Autentikacija

Login ruta: /auth/github

### Model zadatka


```
{
  "text": "text zadatka",
  "resenje": "resenje zadatka",
  "kategorija": "kategorija"
  "tezina": "od 0 do 10"
}
```


### Model korisnika


```
{
  "email": "email korisnika",
  "password": "password korisnika",
  "ime": "ime korisnika"
  "role": "rola korisnika"
  "bodovi": "od 0 do 1000"
}
```

## Kodni standard

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
