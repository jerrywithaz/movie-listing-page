import { MarketData } from 'core/types';
import { requestAustinFeedSuccess } from 'core/actions';
import * as Sagas from './../sagas';
import recordSaga from 'testHelpers/recordSaga';

describe("core/sagas", () => {

    it("should fetch austin feed and return payload", async () => {

        const data = {
            data: {} as MarketData
        };
        const dummyResponse = new Response(JSON.stringify(data));

        const fetchAustinFeed = jest.spyOn(window, "fetch")
            .mockImplementation(() => Promise.resolve(dummyResponse));
        const watchFetchAustinFeed = jest.spyOn(Sagas, "watchRequestAustinFeedAsync");
        
        await recordSaga(
            Sagas.watchRequestAustinFeedAsync,
            null
        );

        const dispatched = await recordSaga(
            Sagas.requestAustinFeedAsync,
            null
        );

        expect(fetchAustinFeed).toHaveBeenCalledTimes(1);
        expect(watchFetchAustinFeed).toHaveBeenCalledTimes(1);

        expect(dispatched).toContainEqual(requestAustinFeedSuccess(data.data));

        fetchAustinFeed.mockReset();
        fetchAustinFeed.mockRestore();
        
    });

});