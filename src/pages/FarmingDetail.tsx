import { useState, useRef, useEffect } from "react";
import "./FarmingDetails.css";

/* ── SVG icon helpers ──────────────────────────────────────────── */
const Icon = {
  Logo: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
        fill="white"
        opacity=".9"
      />
      <path
        d="M9 11c1-2 3-3 5-2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="13" cy="8" r="1.5" fill="white" />
    </svg>
  ),
  Building: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  MapPin: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  GPS: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
  Leaf: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M2 22 16 8M16 8c0-4 4-6 6-6s-2 6-6 6z" />
    </svg>
  ),
  Ruler: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M3 17l4-4M7 13l2-2M9 11l4-4M13 7l2-2M5 19l14-14" />
      <rect
        x="2"
        y="14"
        width="8"
        height="8"
        rx="1"
        transform="rotate(-45 2 14)"
      />
    </svg>
  ),
  Check2: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  ChevronDown: () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  X: () => (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  ),
  User: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  Locate: () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  ),
};

/* ── Data ──────────────────────────────────────────────────────── */
const ALL_CROPS = [
  "Wheat",
  "Corn",
  "Vegetables",
  "Fruits",
  "Coffee",
  "Rice",
  "Soybean",
  "Cotton",
  "Barley",
  "Oats",
];
const METHODS = ["Organic", "Conventional", "GAP-certified"];

/* ── Sub-components ────────────────────────────────────────────── */
function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="#">
        <span className="navbar__logo-icon">
          <Icon.Logo />
        </span>
        AGRIHASH
      </a>
      <ul className="navbar__nav">
        {["Dashboard", "Marketplace", "Traceability", "Wallet"].map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__profile">
        <div className="navbar__profile-avatar">
          <Icon.User />
        </div>
        <div className="navbar__profile-info">
          <div className="navbar__profile-name">Profile Icon</div>
          <div className="navbar__profile-status">Active</div>
        </div>
        <Icon.ChevronDown />
      </div>
    </nav>
  );
}

function Stepper() {
  const steps = [
    { label: "Step 1: Profile", state: "done", suffix: "(completed)" },
    { label: "Step 2 of 3: Role details", state: "active", suffix: "(active)" },
    { label: "Step 3: Documents", state: "upcoming", suffix: "(upcoming)" },
  ];
  return (
    <div className="stepper">
      <div className="stepper__inner">
        {steps.map((s) => (
          <div
            key={s.label}
            className={`stepper__step stepper__step--${s.state}`}
          >
            <div className="stepper__bar" />
            <span className="stepper__label">
              {s.state === "active" ? (
                <>
                  <strong>{s.label}</strong> {s.suffix}
                </>
              ) : (
                <>
                  {s.label} <span style={{ opacity: 0.7 }}>{s.suffix}</span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TextField({ label, icon, value, onChange, placeholder, isFilled }) {
  return (
    <div className="field">
      <label className="field__label">
        <span className="field__label-icon">{icon}</span>
        {label}
      </label>
      <div className="field__input-wrap">
        <input
          className={`field__input${isFilled ? " field__input--filled" : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        <span className="field__check">
          <Icon.Check2 />
        </span>
      </div>
    </div>
  );
}

function GPSField({ value, onChange }) {
  const isFilled = value.trim().length > 0;

  function autoDetect() {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      onChange(
        `${latitude.toFixed(4)}° N, ${Math.abs(longitude).toFixed(4)}° W`,
      );
    });
  }

  return (
    <div className="field">
      <label className="field__label">
        <span className="field__label-icon">
          <Icon.GPS />
        </span>
        GPS coordinates of farm
      </label>
      <div className="field__input-wrap">
        <span className="field__pin">
          <Icon.MapPin />
        </span>
        <input
          className={`field__input field__input--gps${isFilled ? " field__input--filled" : ""}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. 38.5816° N, 121.4944° W"
        />
        <span className="field__check">
          <Icon.Check2 />
        </span>
      </div>
      <span className="field__hint" onClick={autoDetect}>
        <Icon.Locate /> Click to auto-detect
      </span>
    </div>
  );
}

function CropSelect({ selected, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function toggle(crop) {
    onChange(
      selected.includes(crop)
        ? selected.filter((c) => c !== crop)
        : [...selected, crop],
    );
  }

  return (
    <div className="field">
      <label className="field__label">
        <span className="field__label-icon">
          <Icon.Leaf />
        </span>
        Crop types grown
      </label>
      <div className="crop-select" ref={ref} onClick={() => setOpen((o) => !o)}>
        {selected.map((crop) => (
          <span
            key={crop}
            className="crop-tag crop-tag--selected"
            onClick={(e) => e.stopPropagation()}
          >
            {crop}
            <span
              className="crop-tag__remove"
              onClick={(e) => {
                e.stopPropagation();
                toggle(crop);
              }}
            >
              <Icon.X />
            </span>
          </span>
        ))}
        <div
          className="crop-select__controls"
          onClick={(e) => e.stopPropagation()}
        >
          {selected.length > 0 && (
            <span
              className="crop-select__clear"
              title="Clear all"
              onClick={() => onChange([])}
            >
              <Icon.X />
            </span>
          )}
          <span
            style={{ color: "var(--gray-400)" }}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon.ChevronDown />
          </span>
        </div>
        {open && (
          <div className="crop-dropdown" onClick={(e) => e.stopPropagation()}>
            {ALL_CROPS.map((crop) => (
              <div
                key={crop}
                className={`crop-dropdown__option${selected.includes(crop) ? " crop-dropdown__option--active" : ""}`}
                onClick={() => toggle(crop)}
              >
                {crop}
                {selected.includes(crop) && <Icon.Check2 />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FarmSizeField({ value, onChange }) {
  const isFilled = value.trim().length > 0;
  return (
    <div className="field">
      <label className="field__label">
        <span className="field__label-icon">
          <Icon.Ruler />
        </span>
        Farm size in hectares
      </label>
      <div
        className={`field__input-suffix-wrap${isFilled ? " field__input--filled" : ""}`}
      >
        <input
          className="field__input"
          type="number"
          min="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g. 75"
          style={{ borderColor: "transparent", boxShadow: "none" }}
        />
        <span className="field__suffix">ha</span>
      </div>
    </div>
  );
}

function MethodToggle({ value, onChange }) {
  return (
    <div className="field">
      <label className="field__label">
        <span style={{ color: "var(--green-500)", fontSize: 15 }}>✓</span>
        Farming method
      </label>
      <div className="method-toggle">
        {METHODS.map((m) => (
          <button
            key={m}
            className={`method-btn${value === m ? " method-btn--active" : ""}`}
            onClick={() => onChange(m)}
            type="button"
          >
            {value === m && <Icon.Check2 />}
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Main component ────────────────────────────────────────────── */
export default function FarmingDetails({ onBack, onContinue }) {
  const [form, setForm] = useState({
    farmName: "Green Valley Organics",
    address: "123 Rural Road, Sacramento, CA 95814",
    gps: "38.5816° N, 121.4944° W",
    crops: ["Wheat", "Corn", "Vegetables", "Fruits"],
    farmSize: "75",
    method: "Organic",
    yearsOp: "12",
  });

  const set = (key) => (val) => setForm((f) => ({ ...f, [key]: val }));

  function handleSubmit(e) {
    e.preventDefault();
    onContinue?.(form);
  }

  return (
    <>
      <Navbar />
      <Stepper />
      <main className="page">
        <h1 className="page__heading">Farming details</h1>
        <p className="page__sub">Tell us about your farm operation</p>

        <form className="form-card" onSubmit={handleSubmit} noValidate>
          {/* Row 1: Farm name + Address */}
          <div className="field-grid-2">
            <TextField
              label="Business/farm name"
              icon={<Icon.Building />}
              value={form.farmName}
              onChange={set("farmName")}
              placeholder="e.g. Green Valley Organics"
              isFilled={form.farmName.length > 0}
            />
            <TextField
              label="Physical address"
              icon={<Icon.MapPin />}
              value={form.address}
              onChange={set("address")}
              placeholder="Street, City, State, ZIP"
              isFilled={form.address.length > 0}
            />
          </div>

          {/* Row 2: GPS */}
          <GPSField value={form.gps} onChange={set("gps")} />

          {/* Row 3: Crops */}
          <CropSelect selected={form.crops} onChange={set("crops")} />

          {/* Row 4: Farm size + Method */}
          <div className="field-grid-2">
            <FarmSizeField value={form.farmSize} onChange={set("farmSize")} />
            <MethodToggle value={form.method} onChange={set("method")} />
          </div>

          {/* Row 5: Years */}
          <div style={{ maxWidth: "48%" }}>
            <TextField
              label="Years of operation"
              icon={<Icon.Clock />}
              value={form.yearsOp}
              onChange={set("yearsOp")}
              placeholder="e.g. 12"
              isFilled={form.yearsOp.length > 0}
            />
          </div>
        </form>

        {/* Footer nav */}
        <div className="form-footer">
          <button className="btn btn--ghost" type="button" onClick={onBack}>
            <Icon.ArrowLeft /> Back
          </button>
          <button className="btn btn--primary" type="submit" form="">
            Continue
          </button>
        </div>
      </main>
    </>
  );
}
