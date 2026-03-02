SoleMate
========

Project overview
- **Description:** A small static web app showcasing shoes with a product list and detail page.
- **Purpose:** Demo UI and data handling for a shoe catalog (search, details, sizing reference).

Features
- Browse shoe catalog on the homepage (index.html).
- View shoe details on shoe-detail.html.
- Client-side data loaded from nike-shoes.json and sizing helpers in data/sizingData.js.
- Simple responsive layout in style.css and interactivity in script.js.

Repository structure
- [index.html](index.html)  main catalog page
- [shoe-detail.html](shoe-detail.html)  product detail page
- [nike-shoes.json](nike-shoes.json)  sample shoe data
- [assets/](assets/)  images and static assets
- [LICENSE](LICENSE)  project license

Running locally
- Quick (open files): open [index.html](index.html) in your browser.
- Recommended (serve files via HTTP):

  - Python 3:
    ```
    python -m http.server 8000
    ```
    then open http://localhost:8000

  - Node (http-server):
    ```
    npx http-server -c-1
    ```

Development notes
- Data: `nike-shoes.json` is used by `index.js`  modify it to add or change products.
- Review feature and link from 'nike-shoes.json' is located in 'shoe-detail.html'.

Contributing
- Fork, edit README or code, and open a PR. For quick fixes, submit an issue describing the change.

License
- See [LICENSE](LICENSE) for license details.
