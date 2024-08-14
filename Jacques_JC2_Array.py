import tkinter as tk
from tkinter import ttk, messagebox

class Book:
    def __init__(self, title, author, category):
        self.title = title
        self.author = author
        self.category = category

class BookManagerApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Book Manager")
        self.master.geometry("600x400")

        self.books = []

        self.create_widgets()

    def create_widgets(self):
        # Input fields
        tk.Label(self.master, text="Title:").grid(row=0, column=0, padx=5, pady=5, sticky="e")
        self.title_entry = tk.Entry(self.master, width=30)
        self.title_entry.grid(row=0, column=1, padx=5, pady=5)

        tk.Label(self.master, text="Author:").grid(row=1, column=0, padx=5, pady=5, sticky="e")
        self.author_entry = tk.Entry(self.master, width=30)
        self.author_entry.grid(row=1, column=1, padx=5, pady=5)

        tk.Label(self.master, text="Category:").grid(row=2, column=0, padx=5, pady=5, sticky="e")
        self.category_entry = tk.Entry(self.master, width=30)
        self.category_entry.grid(row=2, column=1, padx=5, pady=5)

        # Buttons
        tk.Button(self.master, text="Add Book", command=self.add_book).grid(row=3, column=0, columnspan=2, pady=10)
        tk.Button(self.master, text="View Books", command=self.view_books).grid(row=4, column=0, columnspan=2, pady=5)
        tk.Button(self.master, text="Delete Book", command=self.delete_book).grid(row=5, column=0, columnspan=2, pady=5)

        # Treeview for displaying books
        self.tree = ttk.Treeview(self.master, columns=("Title", "Author", "Category"), show="headings")
        self.tree.heading("Title", text="Title")
        self.tree.heading("Author", text="Author")
        self.tree.heading("Category", text="Category")
        self.tree.grid(row=6, column=0, columnspan=2, padx=5, pady=5, sticky="nsew")

        # Configure grid weights
        self.master.grid_rowconfigure(6, weight=1)
        self.master.grid_columnconfigure(1, weight=1)

    def add_book(self):
        title = self.title_entry.get().strip()
        author = self.author_entry.get().strip()
        category = self.category_entry.get().strip()

        if title and author and category:
            book = Book(title, author, category)
            self.books.append(book)
            self.clear_entries()
            messagebox.showinfo("Success", "Book added successfully!")
        else:
            messagebox.showerror("Error", "Please fill in all fields.")

    def view_books(self):
        self.tree.delete(*self.tree.get_children())
        for book in self.books:
            self.tree.insert("", "end", values=(book.title, book.author, book.category))

    def delete_book(self):
        selected_item = self.tree.selection()
        if selected_item:
            index = self.tree.index(selected_item)
            del self.books[index]
            self.tree.delete(selected_item)
            messagebox.showinfo("Success", "Book deleted successfully!")
        else:
            messagebox.showerror("Error", "Please select a book to delete.")

    def clear_entries(self):
        self.title_entry.delete(0, tk.END)
        self.author_entry.delete(0, tk.END)
        self.category_entry.delete(0, tk.END)

if __name__ == "__main__":
    root = tk.Tk()
    app = BookManagerApp(root)
    root.mainloop()