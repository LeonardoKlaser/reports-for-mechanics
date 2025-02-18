import React from "react";

interface DocumentTemplateProps {
  documentData: {
    title: string;
    content: string;
  };
  userData: {
    name: string;
    email: string;
  };
}

const DocumentTemplate: React.FC<DocumentTemplateProps> = ({ documentData, userData }) => {
  return (
    <html>
      <head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            h1 {
              color: #333;
            }
            .container {
              border: 1px solid #ddd;
              padding: 20px;
              border-radius: 5px;
              width: 80%;
              margin: auto;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1>{documentData.title}</h1>
          <p>{documentData.content}</p>
          <hr />
          <p><strong>Nome:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      </body>
    </html>
  );
};

export default DocumentTemplate;
