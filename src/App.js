import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Card from "./components/Card";
import Form from "./components/Form";
import TextInput from "./components/TextInput";
import ToggleExpand from "./components/ToggleExpand";
import { initialData } from "./utils";
import moment from "moment";
import localization from "moment/locale/id";
import { FiMaximize, FiMinimize } from "react-icons/fi";
import IconContainer from "./components/IconContainer";
import EmptyState from "./components/EmpyState";

const App = () => {
  moment.updateLocale("id", localization);

  const [data, setData] = useState(initialData);
  const notesActive = data.filter((item) => !item.archived);
  const notesArchive = data.filter((item) => item.archived);

  // const [notesActive, setNotesActive] = useState(
  //   data.filter((item) => !item.archived)
  // );
  // const [notesArchive, setNotesArchive] = useState(
  //   data.filter((item) => item.archived)
  // );

  const isNoDataNotesActive = notesActive.length === 0;
  const isNoDataNotesArchive = notesArchive.length === 0;

  const [search, setSearch] = useState("");
  const [containerExpand, setContainerExpand] = useState("active");
  const [isMouseOverTheHeaderActive, setIsMouseOverTheHeaderActive] =
    useState(false);
  const [isMouseOverTheHeaderArchive, setIsMouseOverTheHeaderArchive] =
    useState(false);

  const isActiveExpand = containerExpand === "active";
  const isArchiveExpand = containerExpand === "archive";
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const handleToggleArchive = (id) => {
    const onToggleArchive = data.map((item) =>
      item.id === id ? { ...item, archived: !item.archived } : item
    );

    setData(onToggleArchive);
    // setNotesActive(onToggleArchive.filter((item) => !item.archived));
    // setNotesArchive(onToggleArchive.filter((item) => item.archived));
  };

  const handleDelete = (id) => {
    const onDelete = data.filter((item) => item.id !== id);

    setData(onDelete);
    // setNotesActive(onDelete.filter((item) => !item.archived));
    // setNotesArchive(onDelete.filter((item) => item.archived));
  };

  useEffect(() => {
    const onSearch = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    // setNotesActive(onSearch.filter((item) => !item.archived));
    // setNotesArchive(onSearch.filter((item) => item.archived));
  }, [search]);

  // useEffect(() => {
  //   setNotesActive(data.filter((item) => !item.archived));
  //   setNotesArchive(data.filter((item) => item.archived));
  // }, [data.length]);

  return (
    <>
      <nav>
        <h1>notes</h1>
      </nav>

      <main className="d-flex gap-10">
        <Form data={data} setData={setData} />

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
                onMouseEnter={() =>
                  setIsMouseOverTheHeaderActive(!isMouseOverTheHeaderActive)
                }
                onMouseLeave={() =>
                  setIsMouseOverTheHeaderActive(!isMouseOverTheHeaderActive)
                }
                onClick={() => setContainerExpand("active")}
                className="head d-flex align-items-center justify-content-between"
              >
                <h2 className="title">catatan aktif</h2>
                {isActiveExpand && (
                  <IconContainer
                    visible={isMouseOverTheHeaderActive ? "visible" : ""}
                    bgColor="green"
                    icon={
                      <FiMinimize className="icon" size={10} color="#1A4D2E" />
                    }
                  />
                )}
                {!isActiveExpand && (
                  <IconContainer
                    visible={isMouseOverTheHeaderActive ? "visible" : ""}
                    bgColor="green"
                    icon={
                      <FiMaximize className="icon" size={10} color="#1A4D2E" />
                    }
                  />
                )}
              </div>

              <div
                className={`notes-container ${isActiveExpand ? "expand" : ""}`}
              >
                {isNoDataNotesActive && <EmptyState />}
                {!isNoDataNotesActive && (
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {notesActive.map((item, index) => (
                      <Card
                        onDelete={() => handleDelete(item.id)}
                        onToggleArchive={() => handleToggleArchive(item.id)}
                        key={index}
                        item={item}
                      />
                    ))}
                  </Masonry>
                )}
              </div>
            </article>

            <article className="archive">
              <div
                onMouseEnter={() =>
                  setIsMouseOverTheHeaderArchive(!isMouseOverTheHeaderArchive)
                }
                onMouseLeave={() =>
                  setIsMouseOverTheHeaderArchive(!isMouseOverTheHeaderArchive)
                }
                onClick={() => setContainerExpand("archive")}
                className="head d-flex align-items-center justify-content-between"
              >
                <h2 className="title align-start">catatan arsip</h2>
                {isArchiveExpand && (
                  <IconContainer
                    visible={isMouseOverTheHeaderArchive ? "visible" : ""}
                    bgColor="green"
                    icon={
                      <FiMinimize className="icon" size={10} color="#1A4D2E" />
                    }
                  />
                )}
                {!isArchiveExpand && (
                  <IconContainer
                    visible={isMouseOverTheHeaderArchive ? "visible" : ""}
                    bgColor="green"
                    icon={
                      <FiMaximize className="icon" size={10} color="#1A4D2E" />
                    }
                  />
                )}
              </div>

              <div
                className={`notes-container ${isArchiveExpand ? "expand" : ""}`}
              >
                {isNoDataNotesArchive && <EmptyState />}
                {!isNoDataNotesArchive && (
                  <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {notesArchive.map((item, index) => (
                      <Card
                        onDelete={() => handleDelete(item.id)}
                        onToggleArchive={() => handleToggleArchive(item.id)}
                        key={index}
                        item={item}
                      />
                    ))}
                  </Masonry>
                )}
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
