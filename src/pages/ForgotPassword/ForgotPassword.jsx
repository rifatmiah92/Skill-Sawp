import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const location = useLocation();
  const prefill = location.state?.email || "";
  const [email, setEmail] = useState(prefill);

  useEffect(() => setEmail(prefill), [prefill]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast.success("Reset email sent — check your Gmail.");
      // open Gmail as assignment asked:
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      toast.error(err.message || "Failed to send reset email");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border px-3 py-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Reset</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
