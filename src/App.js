import { useState } from "react";
import Masonry from "react-masonry-css";
import Card from "./components/Card";
import Form from "./components/Form";
import TextInput from "./components/TextInput";
import ToggleExpand from "./components/ToggleExpand";
import { initialData } from "./utils";
import moment from "moment";
import localization from "moment/locale/id";

const App = () => {
  moment.updateLocale("id", localization);

  const [data, setData] = useState(initialData);

  const [search, setSearch] = useState("");
  const [containerExpand, setContainerExpand] = useState("active");

  const isActiveExpand = containerExpand === "active";
  const isArchiveExpand = containerExpand === "archive";
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <nav>
        <h1>notes</h1>
      </nav>

      <main className="d-flex gap-10">
        <Form />

        <section>
          <TextInput
            icon
            inputValue={(value) => setSearch(value)}
            placeholder="cari judul catatan disini..."
          />

          {/* list note */}
          <div className="list-note">
            <article className="active">
              <div
                onClick={() => setContainerExpand("active")}
                className="head d-flex align-items-center justify-content-between"
              >
                <h2 className="title">catatan aktif</h2>
                <ToggleExpand isExpanded={isActiveExpand} />
              </div>

              <div
                className={`notes-container ${isActiveExpand ? "expand" : ""}`}
              >
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {data.map((item, index) => (
                    <Card key={index} item={item} />
                  ))}
                </Masonry>
              </div>
            </article>

            <article className="archive">
              <div
                onClick={() => setContainerExpand("archive")}
                className="head d-flex align-items-center justify-content-between"
              >
                <h2 className="title align-start">catatan arsip</h2>
                <ToggleExpand isExpanded={isArchiveExpand} />
              </div>

              <div
                className={`notes-container ${isArchiveExpand ? "expand" : ""}`}
              ></div>
            </article>
          </div>
        </section>

        {/* <section className="d-flex align-items-center gap-10 mb-10">

        </section> */}

        <section className="d-flex gap-10"></section>
      </main>
    </>
  );
};

export default App;
