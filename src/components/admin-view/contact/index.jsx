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
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-emerald-400" />

          <p className="mt-4 text-sm text-zinc-500">
            Loading messages...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-zinc-500">
            Messages submitted through your portfolio.
          </p>

          <div className="mt-2 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              ✉
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white">
              Contact Messages
            </h2>
          </div>
        </div>

        {/* Message Count */}
        <div className="w-fit rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2">
          <p className="text-xs uppercase tracking-wider text-zinc-500">
            Messages
          </p>

          <p className="mt-1 text-lg font-semibold text-emerald-400">
            {contactData.length}
          </p>
        </div>
      </div>

      {/* Empty State */}
      {contactData.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-12 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.04] text-2xl">
            ✉
          </div>

          <h3 className="mt-5 text-base font-semibold text-zinc-300">
            No messages yet
          </h3>

          <p className="mt-2 text-sm text-zinc-600">
            Contact messages from your portfolio will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">

          {contactData.map((item, index) => (
            <article
              key={item._id || index}
              className="group rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-xl shadow-black/10 transition-all duration-200 hover:border-emerald-500/20 hover:bg-[#0d0d0d]"
            >

              {/* Message Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">
                    {item.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {item.name || "Unknown sender"}
                    </h3>

                    <p className="mt-1 text-sm text-emerald-400">
                      {item.email}
                    </p>
                  </div>
                </div>

                {/* Date */}
                {item.createdAt && (
                  <p className="text-xs text-zinc-600 sm:text-right">
                    {new Date(item.createdAt).toLocaleString()}
                  </p>
                )}

              </div>

              {/* Divider */}
              <div className="my-5 border-t border-white/10" />

              {/* Message */}
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Message
                </p>

                <p className="whitespace-pre-wrap text-sm leading-7 text-zinc-400">
                  {item.message}
                </p>
              </div>

            </article>
          ))}

        </div>
      )}
    </div>
  );
}