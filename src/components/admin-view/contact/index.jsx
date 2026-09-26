"use client";

import { useEffect, useState } from "react";

export default function AdminContactView() {
  const [contactData, setContactData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchContactData() {
    try {
      const response = await fetch("/api/contact/get", {
        method: "GET",
        cache: "no-store",
      });

      const result = await response.json();

      if (result.success) {
        setContactData(result.data || []);
      }
    } catch (error) {
      console.log("Contact GET Error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchContactData();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Heading */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Messages
        </h1>

        <p className="text-gray-500 mt-2">
          Messages submitted through your portfolio.
        </p>
      </div>

      {/* Messages */}

      {contactData.length === 0 ? (
        <div className="border rounded-lg p-8 text-center">
          <p className="text-gray-500">
            No contact messages yet.
          </p>
        </div>
      ) : (
        <div className="space-y-5">

          {contactData.map((item, index) => (
            <div
              key={item._id || index}
              className="
                border
                border-gray-200
                rounded-lg
                p-6
                shadow-sm
                bg-white
              "
            >

              {/* Name */}

              <div className="mb-3">
                <p className="text-sm text-gray-500">
                  Name
                </p>

                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>
              </div>

              {/* Email */}

              <div className="mb-3">
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="text-gray-800">
                  {item.email}
                </p>
              </div>

              {/* Message */}

              <div className="mb-3">
                <p className="text-sm text-gray-500">
                  Message
                </p>

                <p className="text-gray-700 whitespace-pre-wrap">
                  {item.message}
                </p>
              </div>

              {/* Date */}

              {item.createdAt && (
                <p className="text-xs text-gray-400 mt-4">
                  Received on{" "}
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              )}

            </div>
          ))}

        </div>
      )}
    </div>
  );
}