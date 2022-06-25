import BookStore from "../Model/BookStoreModel";


//Create Book
export const CreateBook = async (req, res) => {
    try {
        const books = new BookStore({
            title: req.body.title,
            image: req.body.image,
            author: req.body.author,
            Chapters: req.body.Chapters,
            price: req.body.price,
            dateOfPublication: req.body.dateOfPublication
        });
        await books.save();
        res.status(200).json({
            message: "Book created",
            status: true,
            data: books

        });
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}


//Get Books
export const FindAllBooks = async (req, res) => {

    try {
        const books = await BookStore.find({})
        if (books) {
            res.status(200).json({
                message: "BookS found",
                status: true,
                data: books
            })
        } else {
            res.status(402).json({
                message: "BookS Not found",
                status: false,
            })
        }

    } catch (error) {
        res.status(422).json({
            data: error.message
        })

    }
}

// SpecificBookDetails
export const SpecificBookDetails = async (req, res) => {
    try {
        let books = await BookStore.findById(req.params.id)
        if (books) {
            res.status(200).json({
                message: "Book Found",
                status: true,
                data: books
            })
        }
        else {
            res.status(422).json({
                message: "Book Not Found",
                status: false,
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error,
            status: false,
        })
    }
}


// Edit Book 
export const EditBook = async (req, res) => {
    const option = { new: true }
    try {
        const book = await BookStore.findByIdAndUpdate(req.params.id, req.body, option)
        if (book) {
            res.status(200).json({
                message: "Updated",
                status: true,
                data: book
            })
        }
        else {
            res.status(422).json({
                message: "Book Not Updated",
                status: false,
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error,
            status: false,
        })
    }

}

//delete Book
export const DeleteBook = async (req, res) => {
    try {
        const book = await BookStore.findByIdAndDelete(req.params.id)
        if (book) {
            res.status(422).json({
                message: "Book deleted",
                status: true
            })
        }
        else {
            res.status(422).json({
                message: "Book Not deleted",
                status: false
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error,
            status: false
        })
    }

}
// Dicount
export const DiscountOffer = async (req, res) => {
    const option = { new: true }
    try {
        const book = await BookStore.findByIdAndUpdate(req.params.id, { price: req.params.price }, option)
        if (book) {
            res.status(200).json({
                message: "Discount applied",
                status: true,
                data: book
            })
        }
        else {
            res.status(422).json({
                message: "Discount Not applied",
                status: false,
            })
        }

    } catch (error) {
        res.status(404).json({
            message: error,
            status: false,
        })
    }

}
