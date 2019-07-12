# Koderski Zadaci API

## API Dokumentacija

### Autentikacija

Login ruta: /auth/github
Dodaj zadatak ruta: /zadaci/dodaj

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
