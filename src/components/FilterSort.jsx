// src/components/FilterSort.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FilterSort({
  categories,
  years,
  teams,
  onFilterChange,
  onSortChange,
}) {
  const { t } = useTranslation("global");

  const [filters, setFilters] = useState({
    category: "",
    year: "",
    team: "",
  });
  const [sort, setSort] = useState("");

  const handleFilter = (field) => (e) => {
    const value = e.target.value;
    const next = { ...filters, [field]: value };
    setFilters(next);
    onFilterChange(next);
  };

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
    onSortChange(value);
  };

return (
  <div className="w-full mb-6 border border-gray-300 rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-wrap justify-between gap-4">
      {/* Categoría */}
      <div className="flex items-center gap-2 w-full sm:w-auto min-w-[220px]">
  <label className="text-sm text-gray-700 w-20 text-right shrink-0">
    {t("filtersort.label_category")}
  </label>
  <select
    value={filters.category}
    onChange={handleFilter("category")}
    className="px-2 py-1 border-none focus:outline-none w-full text-pink-900"
  >
    <option value="">{t("filtersort.default")}</option>
    {categories.map((c) => (
      <option key={c} value={c}>
        {t(c)}
      </option>
    ))}
  </select>
</div>

      {/* Año */}
      <div className="flex items-center gap-2 w-full sm:w-auto min-w-[220px]">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_year")}
        </label>
        <select
          value={filters.year}
          onChange={handleFilter("year")}
          className="px-2 py-1 border-none focus:outline-none w-full text-pink-900"
        >
          <option value="">{t("filtersort.default")}</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Equipo */}
      <div className="flex items-center gap-2 w-full sm:w-auto min-w-[220px]">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_team")}
        </label>
        <select
          value={filters.team}
          onChange={handleFilter("team")}
          className="px-2 py-1 border-none focus:outline-none w-full text-pink-900"
        >
          <option value="">{t("filtersort.default")}</option>
          <option value="ONLY_TEAMS">{t("filtersort.onlyteams")}</option>
          {teams.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Orden */}
      <div className="flex items-center gap-2 w-full sm:w-auto min-w-[220px]">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_sort")}
        </label>
        <select
          value={sort}
          onChange={handleSort}
          className="px-2 py-1 border-none focus:outline-none w-full text-pink-900"
        >
          <option value="">{t("filtersort.default")}</option>
          <option value="cheapfirst">{t("filtersort.cheap_first")}</option>
          <option value="cheaplast">{t("filtersort.cheap_last")}</option>
        </select>
      </div>
    </div>
  </div>
);
}