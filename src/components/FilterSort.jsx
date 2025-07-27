// src/components/FilterSort.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

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
  const [showModal, setShowModal] = useState(false);

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

  // Filtros UI reutilizable
  const filtersUI = (
    <div className="flex flex-col gap-4 w-full">
      {/* Categoría */}
      <div className="flex items-center gap-2 w-full min-w-[220px] relative">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_category")}
        </label>
        <div className="relative w-full">
          <select
            value={filters.category}
            onChange={handleFilter("category")}
            className="text-sm appearance-none px-2 py-1 border-none focus:outline-none w-full text-pink-800 bg-white rounded-md"
          >
            <option value="">{t("filtersort.all")}</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {t(c)}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Año */}
      <div className="flex items-center gap-2 w-full min-w-[220px] relative">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_year")}
        </label>
        <div className="relative w-full">
          <select
            value={filters.year}
            onChange={handleFilter("year")}
            className="text-sm appearance-none px-2 py-1 border-none focus:outline-none w-full text-pink-800 bg-white rounded-md"
          >
            <option value="">{t("filtersort.all")}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Equipo */}
      <div className="flex items-center gap-2 w-full min-w-[220px] relative">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_team")}
        </label>
        <div className="relative w-full">
          <select
            value={filters.team}
            onChange={handleFilter("team")}
            className="text-sm appearance-none px-2 py-1 border-none focus:outline-none w-full text-pink-800 bg-white rounded-md"
          >
            <option value="">{t("filtersort.all")}</option>
            <option value="ONLY_TEAMS">{t("filtersort.onlyteams")}</option>
            {teams
              .filter((team) => team && team.trim() !== "")
              .map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Orden */}
      <div className="flex items-center gap-2 w-full min-w-[220px] relative">
        <label className="text-sm text-gray-700 w-20 text-right shrink-0">
          {t("filtersort.label_sort")}
        </label>
        <div className="relative w-full">
          <select
            value={sort}
            onChange={handleSort}
            className="text-sm appearance-none px-2 py-1 border-none focus:outline-none w-full text-pink-800 bg-white rounded-md"
          >
            <option value="">{t("filtersort.relevance")}</option>
            <option value="cheapfirst">{t("filtersort.cheap_first")}</option>
            <option value="cheaplast">{t("filtersort.cheap_last")}</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: botón para abrir filtros */}
      <div className="w-full sm:hidden mb-4">
        <button
          className="w-full bg-white text-pink-800 py-3 rounded-xl font-semibold shadow-md text-lg flex items-center justify-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <Icon icon="icon-park-twotone:filter" className="w-6 h-6" />
          {t("filtersort.filters")}
        </button>
      </div>
      {/* Modal de filtros en mobile */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-700/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-[95vw] max-w-md mx-auto relative animate-fade-in">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-pink-800 text-2xl font-bold"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4 text-pink-800 text-center">{t("filtersort.filters")}</h2>
            {filtersUI}
            <button
              className="w-full mt-6 bg-pink-800 text-white py-2 rounded-xl font-semibold shadow text-lg"
              onClick={() => setShowModal(false)}
            >
              {t("filtersort.apply")}
            </button>
          </div>
        </div>
      )}
      {/* Desktop: filtros normales */}
      <div className="w-full border bg-white border-gray-300 rounded-2xl p-4 hover:shadow-lg transition-shadow duration-300 flex-wrap justify-between gap-4 hidden sm:flex">
        {filtersUI}
      </div>
    </>
  );
}