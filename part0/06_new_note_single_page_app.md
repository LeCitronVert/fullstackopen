```mermaid
sequenceDiagram
participant browser
participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 : {"message":"note created"}
    deactivate server
    
    Note right of browser: The browser redraws the notes locally, in JS, instead of fetching the notes from the server once more.
```