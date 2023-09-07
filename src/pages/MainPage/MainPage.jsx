import { useCallback, useState } from "react";
import { ChanelList } from "../../components/ChanelList/ChanelList";
import { Header } from "../../components/Header/Header";
import { Search } from "../../components/Search/Search";
import { Container, Loader } from "../../utils";
import { getAllChannels, getAllChannelsBySearch } from "../../redux/channels/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearChannels, clearSearchListChannels } from "../../redux/channels/slice";
import debounce from "lodash/debounce";

const MainPage = () => {
  const { channels, count, searchListChannels } = useSelector(state => state.channels);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [searchList, setSearchList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [load, setLoad] = useState(false);
  const [loadNextPage, setLoadNextPage] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = debounce((event) => {
    if (event.target.value.trim() === searchValue) return;
    const search = event.target.value.trim().toLowerCase();
    setSearchValue(search);
    if (search === "") {
      setPage(1);
      dispatch(clearChannels());
      return setSearchList(false)
    }
    if (search !== "") {
      setSearchPage(1);
      dispatch(clearSearchListChannels());
      return setSearchList(true)
    }
  }, 1000);

  const search = useCallback(async () => {
    if (searchList) {
      searchPage === 1 ? setLoad(true) : setLoadNextPage(true);
      await dispatch(getAllChannelsBySearch({ page: searchPage, search: searchValue }))
    } else if (!searchList) {
      page === 1 ? setLoad(true) : setLoadNextPage(true);
      await dispatch(getAllChannels(page));
    }
    setLoad(false); setLoadNextPage(false)
  }, [dispatch, page, searchList, searchPage, searchValue]);
  
  useEffect(() => { return () => { dispatch(clearChannels()); dispatch(clearSearchListChannels()) } }, [dispatch]);
  useEffect(() => { search() }, [search]);


  const ForwardSearchPage = useCallback( () => {
    if (searchListChannels.length === count) {
      return
    } else {
      setSearchPage(prev => prev + 1);
    }
  }, [count, searchListChannels]);
 
  const ForwardPage = useCallback(() => {
    if (channels.length === count) {
      return
    } else { setPage(prev => prev + 1) }
  }, [channels, count]);

  let chosenChannels = searchList ? searchListChannels : channels
  return (
    <Container>
      <Header title="Channels" goBack={false} profileLink={true} addChannelLink={true} />
      <Search setSearchList={setSearchList} setSearchValue={setSearchValue} handleOnChange={handleOnChange} />
   {load ? <Loader/> : <ChanelList from="maim-page" channels={chosenChannels} isLoading={loadNextPage} ForwardPage={ForwardPage} ForwardSearchPage={ForwardSearchPage} notFound={searchList} />}
    </Container>
  );
};

export default MainPage;
