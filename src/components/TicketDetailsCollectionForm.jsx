import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Info } from "lucide-react";
import TicketPreview from "./TicketPreview"; 

const TicketDetailsCollectionForm = () => {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    githubUsername: "",
  });
  const [showPreview, setShowPreview] = useState(false); // State to toggle preview

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onDrop = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/png": [] },
    maxSize: 500 * 1024, // 500KB
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true); // Show the ticket preview
  };

  if (showPreview) {
    return <TicketPreview formData={formData} file={file} />; // Render the preview
  }

  return (
    <form className="max-w-sm mx-auto mt-5 mb-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="avatar"
          className="text-sm block my-2 text-neutral-400 font-700"
        >
          Upload Avatar
        </label>
        <div
          {...getRootProps()}
          style={{
            border: "1.4px dashed #4B486A",
            background: "#19082B",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input {...getInputProps()} />
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded preview"
              className="block border-2 border-neutral-500 rounded-3xl mb-4 max-h-20"
            />
          ) : (
            <img
              src="/icon-upload.svg"
              alt="upload icon"
              className="block bg-neutral-700 rounded-lg p-1 mb-4"
            />
          )}
          {!file && isDragActive && <p>Drop the files here...</p>}
          {!file && !isDragActive && (
            <p className="text-neutral-600 text-xs font-800">
              Drag and drop or click to upload
            </p>
          )}
          {file && (
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setFile(null)}
                className="px-2 cursor-pointer underline underline-offset-2 decoration-1 py-0.5 bg-neutral-600 text-neutral-400 text-sm rounded"
              >
                Remove image
              </button>
              <button
                type="button"
                className="px-2 cursor-pointer py-0.5 bg-neutral-600 text-neutral-400 text-sm rounded"
              >
                Change image
              </button>
            </div>
          )}
        </div>
        <div className="pt-2 flex items-center gap-1 text-xs text-neutral-600 font-800">
          <Info className="h-3" />
          <p>Upload your photo (JPG or PNG, max size: 500KB)</p>
        </div>
      </div>
      <div className="mt-4">
        <label
          htmlFor="fullname"
          className="text-sm block my-2 text-neutral-400 font-700"
        >
          Full Name
        </label>
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleInputChange}
          className="w-full text-neutral-400 font-800 py-1 px-2 border-2 border-neutral-600 rounded-md bg-neutral-900 focus:outline-2 focus:outline-offset-2 outline-neutral-600"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="fullname"
          className="text-sm block my-2 text-neutral-400 font-700"
        >
          Email Address
        </label>
        <input
          name="email"
          placeholder="example@email.com"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full py-1 px-2 text-neutral-400 font-800 border-2 border-neutral-600 rounded-md bg-neutral-900 focus:outline-2 focus:outline-offset-2 outline-neutral-600"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="githubUsername"
          className="text-sm block my-2 text-neutral-400 font-700"
        >
          Github Username
        </label>
        <input
          type="text"
          value={formData.githubUsername}
          onChange={handleInputChange}
          name="githubUsername"
          placeholder="@yourusername"
          className="w-full py-1 px-2 text-neutral-400 font-800 border-2 border-neutral-600 rounded-md bg-neutral-900 focus:outline-2 focus:outline-offset-2 outline-neutral-600"
        />
      </div>
      <button
        type="submit"
        className="w-full mt-4 bg-custom-orange-500 rounded-md text-neutral-900 font-800 py-1.5 focus:outline-2 focus:outline-offset-2 outline-neutral-600 cursor-pointer"
      >
        Generate My Ticket
      </button>
    </form>
  );
};

export default TicketDetailsCollectionForm;
