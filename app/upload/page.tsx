"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
        {publicId && <CldImage src={publicId} alt="An image" width={270} height={180} />}
      <CldUploadWidget
        onSuccess={(result, widget) => {
          if (result.event != "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
        uploadPreset="ml_default"
        options={{
            sources:['local'],
            multiple: true,
            maxFiles:5
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
