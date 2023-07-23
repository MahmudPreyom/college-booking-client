const AdmissionForm = () => {
    return (
        <div className="w-full max-w-md mx-auto mt-8 mb-8 rounded bg-sky-200 p-3">
            <h1 className="text-2xl text-center font-bold mb-4">Admission Form</h1>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="pictureURL" className="block text-gray-700 font-bold">
                        Your Picture
                    </label>
                    <input
                        type="text"
                        name="photo"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerName" className="block text-gray-700 font-bold">
                        Seller Name
                    </label>
                    <input
                        type="text"
                        name="sellerName"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="sellerEmail" className="block text-gray-700 font-bold">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="sellerEmail"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subCategory" className="block text-gray-700 font-bold">
                        Sub-category
                    </label>
                    <select
                        name="subCategory"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    >
                        <option value="">Select Departments</option>
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Earts">Earts</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 font-bold">
                        Rating
                    </label>
                    <input
                        type="number"
                        name="rating"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                        Available Quantity
                    </label>
                    <input
                        type="number"
                        name="quantity"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-bold">
                    Detail description
                    </label>
                    <input
                        type="text"
                        name="detailDescription"
                        className="border border-gray-300 rounded-md px-4 py-2 w-full" required
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionForm;