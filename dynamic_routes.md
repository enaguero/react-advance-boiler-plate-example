
https://upgraded-space-bassoon-4jxxj4rg54c75wj-3000.app.github.dev/single/34

URL BASE: https://upgraded-space-bassoon-4jxxj4rg54c75wj-3000.app.github.dev

Ruta relative: single/34

pattern: single/:theId
single/35
single/37
single/490
single/angel-malvado
single/perrito-bonito


Single -> useParams -> const theId = perrito-bonito



## Ciclo de vida del dispatch 

### useState
```
 const [name, setName] = useState("Andres")

    <button className="btn btn-success" 
    onClick={() => 
        setName("Pedrito")
    }>
    Change Color
    </button>

```


### useState


```
    const { store, dispatch } = useGlobalReducer()

    dispatch(
        {
            type: "changeMessage",
            payload: { newMessage: "El cielo esta azul" }
        }
    )

```
