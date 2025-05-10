// SortOrder.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function SortOrder({ sortField, sortDirection, onChange }) {
  const { t } = useTranslation("global");

  return (
    <div className="SortOrder flex items-center gap-4 mb-6">
      <label>
        {t("product.sort_by")}:
        <select
          value={sortField}
          onChange={(e) => onChange("field", e.target.value)}
          className="ml-2 p-1 border rounded"
        >
          <option value="">{t("product.select_field")}</option>
          <option value="price">{t("product.price")}</option>
          <option value="category">{t("product.category")}</option>
        </select>
      </label>

      <label>
        {t("product.order")}:
        <select
          value={sortDirection}
          onChange={(e) => onChange("direction", e.target.value)}
          className="ml-2 p-1 border rounded"
        >
          <option value="asc">{t("product.ascending")}</option>
          <option value="desc">{t("product.descending")}</option>
        </select>
      </label>
    </div>
  );
}