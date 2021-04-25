Install [velociraptor](https://github.com/jurassiscripts/velociraptor)

### To run

```bash
vr start
```

```
curl --request POST \
  --url http://localhost:8080/ \
  --header 'Content-Type: application/json' \
  --data '{
	"isbn": "978-1-4028-9462-6",
	"author": "Kyle Simpson",
	"title": "Scope & Closures"
}'
```