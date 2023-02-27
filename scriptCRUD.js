
        var inputContainer = document.getElementById("container")
        var bookNameInput = document.getElementById("name")
        var bookCategoryInput = document.getElementById("category")
        var bookPriceInput = document.getElementById("price")
        var books = document.getElementById("books")
        var addBtn = document.getElementById("add")

        addBtn.addEventListener("click", createBook)
        books.addEventListener("click", (e) => {
            let tar = e.target
            if (tar.className == "delete-btn") {
                let removeBook = document.getElementById(tar.id)
                removeBook.remove()
                localStorage.removeItem(tar.id)
            } else if (tar.className == "update-btn") {
                let updateBook = document.getElementById(tar.id)
                update(updateBook)
            }
        })

        function createBook() {
            let d = new Date()
            let id = d.getTime() + ""
            var book = {
                id: d.getTime() + "",
                name: bookNameInput.value,
                price: bookPriceInput.value,
                category: bookCategoryInput.value
            }
            add(book)
            localStorage.setItem(book.id, JSON.stringify(book))
        }

        function add(book) {
            let d = new Date()
            let id = d.getTime() + ""
        
            //create book container div
            var bookContainer = document.createElement("div")
            bookContainer.className = "book"
            bookContainer.id = book.id

            //create input buttons conatiner
            var bookBtns = document.createElement("div")
            bookBtns.className = "book-btns"

            var deleteBtn = document.createElement("input")
            deleteBtn.type = "button"
            deleteBtn.className = "delete-btn"
            deleteBtn.id = book.id
            deleteBtn.value = "Delete"

            var updateBtn = document.createElement("input")
            updateBtn.type = "button"
            updateBtn.className = "update-btn"
            updateBtn.id = book.id
            updateBtn.value = "Change Name"
            //Add buttons into the books input buttons conatiner as its child
            bookBtns.appendChild(deleteBtn)
            bookBtns.appendChild(updateBtn)

            //Create book image
            var bookImg = document.createElement("img")
            bookImg.src = "book.png"
            bookImg.className = "book-img"

            //Create name output with values
            var bookNameTitle = document.createElement("span")
            bookNameTitle.className = "name-title"
            bookNameTitle.innerText = "Name: "

            var bookNameOutput = document.createElement("span")
            bookNameOutput.className = "name-output"
            bookNameOutput.innerText = book.name


            //Create price output with values
            var bookPriceTitle = document.createElement("span")
            bookPriceTitle.className = "price-title"
            bookPriceTitle.innerText = "Price: "

            var bookPriceOutput = document.createElement("span")
            bookPriceOutput.className = "price-output"
            bookPriceOutput.innerText = book.price

            //Create name output with values
            var bookCategoryTitle = document.createElement("span")
            bookCategoryTitle.className = "category-title"
            bookCategoryTitle.innerText = "Category: "

            var bookCategoryOutput = document.createElement("span")
            bookCategoryOutput.className = "category-output"
            bookCategoryOutput.innerText = book.category


            //Reset value in the inputs
            bookNameInput.value = ""
            bookPriceInput.value = ""
            bookCategoryInput.value = ""

            //Add everything into the book div element
            bookContainer.appendChild(bookBtns)
            bookContainer.appendChild(bookImg)
            bookContainer.appendChild(bookNameTitle)
            bookContainer.appendChild(bookNameOutput)
            bookContainer.appendChild(document.createElement("br"))

            bookContainer.appendChild(bookPriceTitle)
            bookContainer.appendChild(bookPriceOutput)
            bookContainer.appendChild(document.createElement("br"))

            bookContainer.appendChild(bookCategoryTitle)
            bookContainer.appendChild(bookCategoryOutput)

            //console.log(bookContainer)

            //Append the new book into the books container
            books.appendChild(bookContainer)
        }

        function update(book) {
            // Create Update button
            var updateBtn = document.createElement("input")
            updateBtn.type = "button"
            updateBtn.value = "Update"

            //Remove add button in the input area and replace it with the update button
            addBtn.remove()
            inputContainer.appendChild(updateBtn)

            //Get the area that display the book name price and category from the book
            let bookName = null
            let bookPrice = null
            let bookCategory = null
            for (var i = 0; i < book.childNodes.length; i++) {
                if (book.childNodes[i].className == "name-output") {
                    bookName = book.childNodes[i];
                    // console.log(bookName)
                }
                else if (book.childNodes[i].className == "price-output") {
                    bookPrice = book.childNodes[i];
                    // console.log(bookPrice);
                }
                else if (book.childNodes[i].className == "category-output") {
                    bookCategory = book.childNodes[i];
                    // console.log(bookCategory);
                }
            }

            //put the original data of the book in the input area for the user to update
            bookNameInput.value = bookName.innerText
            bookPriceInput.value = bookPrice.innerText
            bookCategoryInput.value = bookCategory.innerText

            updateBtn.addEventListener("click", () => {
                //Update the data of the book with new data after user click the Update button
                bookName.innerText = bookNameInput.value
                bookPrice.innerText = bookPriceInput.value
                bookCategory.innerText = bookCategoryInput.value

                localStorage.setItem(book.id, JSON.stringify({
                    id: book.id,
                    name: bookNameInput.value,
                    price: bookPriceInput.value,
                    category: bookCategoryInput.value
                }))

                //Reset the value in the input area 
                bookNameInput.value = ""
                bookPriceInput.value = ""
                bookCategoryInput.value = ""

                //Remove the update button and replace it back with the add button
                updateBtn.remove()
                inputContainer.appendChild(addBtn)
            })
        }

        function getAllStorage() {
            let getLocalStorageKeys = [];
            let temporaryList = []
            for (let i = 0; i < localStorage.length; i++) {
                getLocalStorageKeys.push(localStorage.key(i))
            }

            for (i = 0; i < getLocalStorageKeys.length; i++) {
                let book = JSON.parse(localStorage.getItem(getLocalStorageKeys[i]))
                temporaryList.push(book);
            }

            temporaryList.sort((a, b) => a.id - b.id);
            temporaryList.forEach((book) => {
                add(book)
            })
        }

        getAllStorage()

    