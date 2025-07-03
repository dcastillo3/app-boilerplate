import { useState } from "react";
import { apis, initialStates } from "../../utils/consts";
import axios from "axios";

function use__NAME_PASCAL__() {
    const [__NAME__, set__NAME_PASCAL__] = useState(initialStates.__NAME__);

    const fetch__NAME_PASCAL__ = async () => {
        try {
            let res = await axios.get(apis.__NAME__);

            if (!res?.data?.success) {
                const { err = {} } = res.data;

                console.error(err);
            } else if (res?.data?.success) {
                const { data = {} } = res.data;

                set__NAME_PASCAL__(data);
            };
        } catch (err) {
            const errorMessage = err?.response ? err.response : err;
            
            console.error(errorMessage);
        };
    };

    return {
        __NAME__,
        fetch__NAME_PASCAL__
    };
};

export default use__NAME_PASCAL__;
