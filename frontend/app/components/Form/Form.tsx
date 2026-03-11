"use client";
import styles from "./Form.module.scss";
import img from "../../images/home/form/form.png";
import { useState } from "react";
import type { FormEvent } from "react";
import Loader from "../Loader/Loader";
import { Notify, type TStatusNotify } from "../Notify/Notify";
import { sendContactForm, type ContactFormData } from "../../api/api";
import { useTranslation } from "react-i18next";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function Form() {
  const { t } = useTranslation();
  const [processing, setProcessing] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [notifyStatus, setNotifyStatus] = useState<TStatusNotify>("default");
  const [notifyTitle, setNotifyTitle] = useState("");
  const [notifyText, setNotifyText] = useState("");
  let timeoutId: NodeJS.Timeout | null = null;
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = t("form.errors.nameMin");
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = t("form.errors.emailInvalid");
    }

    if (!formData.message.trim() || formData.message.trim().length < 2) {
      newErrors.message = t("form.errors.messageMin");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const showNotification = (
    status: TStatusNotify,
    title: string,
    text: string
  ) => {
    setNotifyStatus(status);
    setNotifyTitle(title);
    setNotifyText(text);
    setNotifyOpen(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      setNotifyOpen(false);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }, 3000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotifyOpen(false);
    setProcessing(true);

    const valid = validateForm();

    if (!valid) {
      showNotification(
        "error",
        t("form.notifications.validationError.title"),
        t("form.notifications.validationError.text")
      );
      setProcessing(false);
      return;
    }

    await submitForm();
    setProcessing(false);
  };

  const submitForm = async () => {
    try {
      const response = await sendContactForm(formData);

      if (response.success) {
        showNotification(
          "success",
          t("form.notifications.success.title"),
          t("form.notifications.success.text")
        );

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        showNotification(
          "error",
          t("form.notifications.error.title"),
          response.message || t("form.notifications.error.failedToSend")
        );
      }
    } catch {
      showNotification(
        "error",
        t("form.notifications.error.title"),
        t("form.notifications.error.generic")
      );
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <div className={styles.columns}>
        <img className={styles.image} src={img} alt={t("form.imageAlt")} />
        <form method="post" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            className={`${styles.input} ${errors.name ? styles.error : ""}`}
            placeholder={t("form.placeholders.name")}
            value={formData.name}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="name-error" className={styles.fieldError}>
              {errors.name}
            </p>
          )}
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`${styles.input} ${errors.phone ? styles.error : ""}`}
            placeholder={t("form.placeholders.phone")}
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            className={`${styles.input} ${errors.email ? styles.error : ""}`}
            placeholder={t("form.placeholders.email")}
            value={formData.email}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className={styles.fieldError}>
              {errors.email}
            </p>
          )}
          <textarea
            name="message"
            id="message"
            className={`${styles.textarea} ${errors.message ? styles.error : ""}`}
            placeholder={t("form.placeholders.message")}
            value={formData.message}
            onChange={handleInputChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
            maxLength={500}
          />
          {errors.message && (
            <p id="message-error" className={styles.fieldError}>
              {errors.message}
            </p>
          )}
          <button type="submit" className={styles.submit} disabled={processing}>
            {processing ? (
              <>
                {t("form.buttons.sending")}
                <Loader />
              </>
            ) : (
              t("form.buttons.send")
            )}
          </button>
          <p className={styles.privacy}>{t("form.privacy")}</p>
        </form>
      </div>

      <Notify
        status={notifyStatus}
        open={notifyOpen}
        setOpen={setNotifyOpen}
        title={notifyTitle}
        text={notifyText}
      />
    </>
  );
}
