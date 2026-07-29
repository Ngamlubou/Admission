import "./Overview.css";
import data from "./Data";

export default function Overview() {
  return (
    <div className="overview">

      {data.map((section) => (
        <section key={section.title}>

          <h2>
            {section.title}
          </h2>


          <div className="overview-grid">

            {section.items.map((item) => (
              <div
                className="overview-card"
                key={item.label}
              >
                <span>
                  {item.label}
                </span>

                <strong>
                  {item.value}
                </strong>
              </div>
            ))}

          </div>

        </section>
      ))}

    </div>
  );
}
