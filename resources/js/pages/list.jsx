import React from "react";
import { router } from "@inertiajs/react"; // We need to import this router for making POST request with our form
import { toast } from "react-toastify";

export default function List({ urls }) {

    function deleteItem(id) {
        confirm("Are You Sure to delete this")
        router.delete(`/url/${id}`);
        toast.error("Success Notification !", {
            position: "bottom-right",
            className: 'foo-bar'
        });
    }

    function copyItem(item) {
        navigator.clipboard.writeText(`${item.shortened_url}`);
        toast.success("Copied to clipboard !", {
            position: "bottom-right",
            className: 'foo-bar'
        });
    }

    return (
        <>
            <div className="container mt-5">
                {urls &&
                    urls.map((item) => (
                        <ul className="list-group mb-2" key={item.id}>
                            <li className="list-group-item">
                                <div className="row">
                                    <div className="col-5 mt-2">{item.original_url}</div>
                                    <div className="col-6 mt-2">{item.shortened_url}</div>
                                    <div className="col-1">
                                        <button className="btn btn-secondary btn-sm" onClick={() => copyItem(item)}>
                                            Copy
                                        </button>
                                        <button type="button" className="btn btn-sm btn-danger mx-1" aria-label="Close" onClick={() => deleteItem(item.id)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    ))}
            </div>
        </>
    );
}
