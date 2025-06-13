import React, { useState, useRef } from "react";
import axios from "axios";

const translations = {
  en: {
    title: "Feedback",
    fullName: "Full Name",
    phone: "Phone Number",
    description: "Description",
    image: "Upload Image (Optional)",
    submit: "Submit",
    namePlaceholder: "Your Name",
    phonePlaceholder: "Your Phone Number",
    descriptionPlaceholder: "Enter Description",
    success: "Feedback submitted successfully!",
    error: "Failed to submit feedback.",
  },
  mr: {
    title: "अभिप्राय",
    fullName: "पूर्ण नाव",
    phone: "फोन नंबर",
    description: "माहिती",
    image: "छायाचित्र अपलोड करा (पर्यायी)",
    submit: "पाठवा",
    namePlaceholder: "तुमचं नाव",
    phonePlaceholder: "तुमचा फोन नंबर",
    descriptionPlaceholder: "माहिती लिहा",
    success: "अभिप्राय यशस्वीरीत्या पाठवला!",
    error: "अभिप्राय पाठवण्यात अयशस्वी.",
  },
};

const FeedbackForm = () => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    description: "",
    image: null,
  });

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  const toastRef = useRef();

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("description", formData.description);
    if (formData.image) form.append("image", formData.image);

    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/feedback`;
      await axios.post(apiUrl, form);
      showToast(t.success, "success");
      setFormData({ name: "", phone: "", description: "", image: null });
    } catch (error) {
      console.error(error);
      showToast(t.error, "danger");
    }
  };

  return (
    <div className="container py-4">
      {/* Language Selector */}
      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="mr">मराठी</option>
        </select>
      </div>

      <h3 className="text-center text-primary fw-bold mb-4">{t.title}</h3>

      {/* Toast Message */}
      {toast.show && (
        <div
          className={`toast align-items-center text-white bg-${toast.type} border-0 show position-fixed top-0 end-0 m-4`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          ref={toastRef}
        >
          <div className="d-flex">
            <div className="toast-body">{toast.message}</div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="card p-4 shadow"
      >
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">{t.fullName} *</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">{t.phone} *</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder={t.phonePlaceholder}
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d{0,10}$/.test(value)) {
                  setFormData({ ...formData, phone: value });
                }
              }}
              maxLength="10"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">{t.description} *</label>
          <textarea
            name="description"
            className="form-control"
            placeholder={t.descriptionPlaceholder}
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">{t.image}</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        <div className="text-end">
          <button className="btn btn-success px-4" type="submit">
            {t.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
