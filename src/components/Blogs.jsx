import React, { useEffect, useState } from "react";

function Blogs(props) {
    const defaultItem = {
        featured: false,
        like: false,
        title: "Card title",
        body: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        author: "Manu",
        time: "Last updated a second ago",
    };

    const [blogs, setBlogs] = useState([]);
    const [shadowCard, setShadowCard] = useState([]);
    const [editingShadow, setEditingShadow] = useState(false);

    useEffect(() => {
        let makeBlogsList = [];
        let i = 0;
        while (i < 10) {
            i++;
            makeBlogsList = [
                ...makeBlogsList,
                {
                    ...defaultItem,
                    key: i,
                    like: i % 2,
                    featured: i % 3 == 1,
                    title: defaultItem.title + " " + i,
                },
            ];
        }
        setBlogs(makeBlogsList);
    }, []);

    function handleLike(blogId) {
        const blogList = [...blogs];
        const blogIndex = blogList.findIndex((b) => b.key === blogId);
        const blog = { ...blogList[blogIndex] };
        blogList[blogIndex] = { ...blog, like: !blog.like };
        setBlogs(blogList);
    }

    function handleEdit(blogId) {
        const blogList = [...blogs];
        const blogIndex = blogList.findIndex((b) => b.key === blogId);
        const blog = { ...blogList[blogIndex] };
        blogList[blogIndex] = {
            ...blog,
            title: blog.title + "+",
            featured: !blog.featured,
        };
        setBlogs(blogList);
    }

    function handleDelete(blogId) {
        const blogList = blogs.filter((b) => b.key != blogId);
        setBlogs(blogList);
    }

    function handleShadow(blogId) {
        setShadowCard([...shadowCard, blogId]);
    }
    function handleShadowDelete(blogId) {
        setShadowCard(shadowCard.filter((bId) => bId != blogId));
    }

    return (
        <>
            <div className="container">
                <div className="p-3">
                    <div
                        className={"card" + (editingShadow ? " shadow" : "")}
                        onMouseEnter={() => setEditingShadow(true)}
                        onMouseLeave={() => setEditingShadow(false)}
                    >
                        <div className="card-header h5 bg-warning">
                            Make new post..!
                        </div>
                        <div className="card-body">
                            <div class="mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Title"
                                />
                            </div>
                            <div class="mb-3">
                                <textarea
                                    class="form-control"
                                    rows="3"
                                    placeholder="Content"
                                ></textarea>
                            </div>
                            <div className="">
                                <button className="btn btn-sm btn-primary">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <div className="card bg-secondary text-white">
                        <div className="card-body">
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-md-1 d-none d-md-block">
                                        <label
                                            htmlFor="inputPassword6"
                                            className="col-form-label"
                                        >
                                            Search:{" "}
                                        </label>
                                    </div>
                                    <div className="col-md-11">
                                        <input
                                            type="search"
                                            id="inputPassword6"
                                            className="form-control"
                                            aria-describedby="passwordHelpInline"
                                            placeholder="Search..."
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    {blogs.map((blog) => (
                        <div
                            key={blog.key}
                            className={
                                "card mb-3" +
                                (shadowCard.includes(blog.key) ? " shadow" : "")
                            }
                            onMouseEnter={() => handleShadow(blog.key)}
                            onMouseLeave={() => handleShadowDelete(blog.key)}
                        >
                            <div className="row g-0">
                                <div className="col-12">
                                    <div
                                        className={
                                            "card-header h5" +
                                            (blog.featured
                                                ? " bg-success text-white"
                                                : "")
                                        }
                                    >
                                        {blog.title}
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{blog.body}</p>
                                        <footer className="blockquote-footer">
                                            {blog.author}
                                        </footer>

                                        <div className="row">
                                            <div className="col-lg-2 col-md-3">
                                                <h4>
                                                    <i
                                                        className={
                                                            "clickable bi bi-suit-heart" +
                                                            (blog.like
                                                                ? "-fill text-danger"
                                                                : "")
                                                        }
                                                        onClick={() =>
                                                            handleLike(blog.key)
                                                        }
                                                    ></i>
                                                </h4>
                                            </div>
                                            <div className="col-lg-8 col-md-6 mb-2">
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        {blog.time}
                                                    </small>
                                                </p>
                                            </div>
                                            <div className="col-lg-2 col-md-3">
                                                <button
                                                    className="btn btn-sm btn-warning me-2"
                                                    onClick={() =>
                                                        handleEdit(blog.key)
                                                    }
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-danger me-2"
                                                    onClick={() =>
                                                        handleDelete(blog.key)
                                                    }
                                                >
                                                    <i className="bi bi-trash-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Blogs;
