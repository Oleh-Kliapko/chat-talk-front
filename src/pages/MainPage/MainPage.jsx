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
  const { channels, isLoading, count, searchListChannels } = useSelector(state => state.channels);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);
  const [searchList, setSearchList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnChange = debounce(async (event) => {
    setLoad(true)
    const search = event.target.value.trim().toLowerCase();
    if (search === searchValue) return;
    setSearchValue(search);
    dispatch(clearChannels());
    dispatch(clearSearchListChannels());
    setSearchPage(1);
    setPage(1);
    if (search === "") return setSearchList(false);
    if (search !== "") return setSearchList(true);
  }, 1500);

  const search = useCallback(async () => {
    setLoad(true)
    if (searchList) {
      await dispatch(getAllChannelsBySearch({ page: searchPage, search: searchValue }))
    }  if (!searchList){
      await dispatch(getAllChannels(page));
    }
    setLoad(false)
   }, [dispatch, page, searchList, searchPage, searchValue]);
  
  useEffect(() => {
    dispatch(clearChannels());
    dispatch(clearSearchListChannels())
    return () => {
      dispatch(clearChannels());
      dispatch(clearSearchListChannels());
    }
  }, [dispatch]);

  useEffect(() => {
    search();
    return () => { if (page !== 1) { dispatch(clearChannels()) } if (searchPage !== 1) { dispatch(clearSearchListChannels()) } };
  }, [dispatch, page, search, searchPage]);


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

  let chosenChannels = searchList ? searchListChannels : channels;
  return (
    <Container>
      <Header title="Channels" goBack={false} profileLink={true} addChannelLink={true} />
      <Search setSearchList={setSearchList} setSearchValue={setSearchValue} handleOnChange={handleOnChange} isLoading={isLoading}  />
    { load ? <Loader/> : <ChanelList channels={chosenChannels} isLoading={isLoading} ForwardPage={ForwardPage} ForwardSearchPage={ForwardSearchPage} notFound={searchList} />}
    </Container>
  );
};

export default MainPage;
