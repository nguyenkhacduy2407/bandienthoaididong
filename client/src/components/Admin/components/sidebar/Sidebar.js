import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  WechatOutlined,
} from "@ant-design/icons";

function Sidebar(props) {
  const dispatch = useDispatch();
  const location = useLocation()
  const { orderPendding } = useSelector((state) => state.allOrder);
  let totalNewOrder
  
  if(orderPendding){
    totalNewOrder = orderPendding.length
  }

  useEffect(() => {
    const getNewOrder = () => {
      dispatch(GetAllOrderPendding());
    }
    getNewOrder()
  }, [dispatch]);

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAABWVBMVEXtGyT////uGyLsGyboAA7z29beAAvrCxXogYH97ejaAArnsbHnABLurKj8/////v///foAokb/+//wGiDQEBbbAADjAAD5//3pHSQAoUfwGSbRExz///nqHCf/+fX2//+j1ryX1LVZtofH6tcAl0b55N0AmkIAm1AAoUJkvo7TABEApk3w/viHza0An0kAqEzg+u26489twpT/+e/qq5/eTVDojYf96Ob1zsjzwrzedHLvysPfQURpuZGJyasApFNFqHM5rHDT8OgdpV0AkTvxztDr0MjWZmHtoKHZIjXWR0beeG/bVFvTUUzOW17qtq7maW/84ufXNzXEOyvx1snmnJPzt7jiKS/ggn/WMS7GBgfkkpLbU13ZcXPnrqXqnpDacGPpwrH1xMbhWlbeiY/Kb2tsspOp48rN7daN2rm62swAj0xRtn5ty54fsmHP+OZCu3tmsoeUz7niKxemAAAcL0lEQVR4nO2d+1/ayNrAM+GSQnEmJEJCDMQLYOSu1AsqKtJWa92lp0erHs/2vNvuWbdbu3b7///wPs8ErcpV5GL9nKcXFEIy3zzXmUwyAnnowpjGWO9fF/rXkkEJZcrjBWSEKZRlaO97eOCAXF68vMeXHy4gmCWllJkrO6Gn99jNwwWE0EKJebCjq+HHCShTDfC8kiq6Hykg8awGJFWPRgO1e+zmAQKC85mMUt+SXxUEURCER6ZBE0ILJcXdV6JqCFweGaCsybL8Yc+tiuLjBCTUTLwOS6LgiuqPDlCDskwxn01Ioih8l0cEqEDqO9gPqMINeUSAlhbb9auqrj9WQPLiJ7co6saj1CBVrNjhhFrPfY8QUGO+nwOGKyo0yCMBhPASVsWo8WgBNeIJi2qDfT4eQJl6QmITvEcDSBCwGd/jAUw8bkCZJsKDA8SRR6rVfyAMR7FkIjPGFPjH8F34IxNNM/lYCf/bdxkkIKWyzBSAAjiq0UYCyjeiVAFQHKgcCKB7UICMyKbC2w/9zVjCU6o93V16srrzZn+Ry/7+m9XVpd2ntbWET+agyrWx2HuMyt6UQWqQmMXEQe30yZv1k3G/1x2QJMkN/ySVi+RIwB32+sfXd47fryWK/SC6JYMBZEz21E539ib8bncggEhOMsKKwiW4XC54herexQ8lihzX7fYf7S/VEib6LLoud9S7CdVM7YadU7J8V0CZUh48qKk5hqVpmkxveo9gkRd+UJbaPMe2ElEESu+rN2MHoEqmaJZ2Rz4kutmSuwPCDuD8Yh/Z2ZVpxpb/8Y8X4GDvxw5PlxwRFHoQ1nWxSQnYXkC1IugyfLJa82kEjnFHPFmzfPfSIJgOc8DkWGLl6e6TXxbfjvtD4bCbi8T/kySBUo/3jurjYrgEHb5miFIgtT+G1npHoSv/jN0HkPDAsTZ2/PHthNfLI4YkulyG4cDw/1zRqMCIx6/f6kJ3IyL4o1h3UdWd2qn5COU5tAtvRNehH8bDa/jTNcA2lQzXFZPR68AUCYn51saeQOAIuL+HDTQqEV94q0RHIIp6vHfXXyNuYOL4wGRQCqBndACEk6CVUrq6I0PxcPVmJ0CZWjyRycsfDlfXBQiIYjeW1x9AA+Orf7FWhLOsdc6MjLzzq1EjVbzmu4z42gA6cdosroytrqfCbkkFuwHNddG0/gCCnQqGobpf7frkzhokZi0ADRS9NfLdRNsDwncStaWPEyE35mZufK7uHKtPgC5EFAU9cHTqI4opt4yq4EQyeerXDZcoqPsmvZZf2gD6ak/WU14c7QbPN1wYNNDjhgh4Jar76LAIEHILQFCVWUupOo8DqQS7Cr8ybQM4FpJ6iPRc+g2I8eboPQSEVnwafYdDnzzxSs+Y1h3g7cHg7qXfgIZh6IL7p5WW+pNLAREqC76xumjS7gC9DwYQ07/hkkLH4IpyvX955X8mxJSSXzT4WcAE6j/4/jmNtQF0i64e29N3QEdE90mJYKfqOqBMFbIy4fifs5V6eC36xFo0hJtozy0ZECAUquFV360CjiqaJ6V+H5oXdXXd7BKw5zYOCtCI6hIokV7XICOJ6PUrK6Ighld+VEDooERV/6lJFebUqBA+qe9EEur+52ykS8eEOhlFJu188OEBclHd//ZRZ3RDowr17Uk3+2VgrCdF5nR8zR8Q0ICy42hF48kc9BfbhxLyJqAoun9VLFYH/KFMFEWHelNNPeUmyKi5GtB11+2etbRT99MfEVBEFaneUxlKN8tcCkCCdN0qkHVVLyo/LCCKS1cDxzHFJGNho9m4iHg5j8lkMf+PCGjooho+Jdryv6Rok4ubEIj26yb6gwJCNtfdTyj9B/Rwm36uehM/NCB0hF3SE0KW/aKr6XFE99ilD/qb7+JhA6IgoM8vtKiX1cXHDWgIAc+jBoyK7tM6YIsxlsEC6picDQP+4Y93Hz9FaQsIUXbdVChDwJEEGYDDYaxoNGqoXY7U3Zb2PigI3pcKDkWNBlAUJUkF9QGbAZVJtJeOdSdA6Zhin2IkgKL4cX9v/SgV8vu9bn/A7ZZ60GEnQPUoRgHQHAnghElkWfEt+zwrpdLTsdMnixNhtwRtdelNS69m0glQCH/Aa+RytCdAVeShwbkS0SgdAeVbl/FM38HuvwU3jsC2/tpN6Qio/kIswnoDxODgSLSp/9wVkF+dN31j+/7ujbUjoBj1UcJiR70AiqoU4FcEVd3oUYM3BqmphlexoHfnOT1Su7TRToCGEH6n9Qqo+vd3a7Xa2trpK6kfgPWrexra6mlKQtsXOkXWjoCGtG/2AihGoYHvKFV4s4o7apO23B3wmiT2cJDMuC8gXqXw0R4A1ajhL8mW40SKVVyXjIaK/j6AVPP9FBD1jld5ugAM7GpU7kGD0mvTmcBEqEKtp5LR0Jj7ACpM8+1Iaov0dRdAQVo0tR4AdXfJMVDnRtFEk+kG99OgTIs/dZ7C0DmK6mrKw+STO5uoHl4h9St1OLvM5xUbLtLcywcREr7eKZh2oUFBOiXyUfNLSG2i6LWRcRRf2NUwbnBfQGYutRhpuNb4LgDV9cRa9CECUtoq+H2XbgAFKeRumsdGDShr9DTQIZB2A6hDx7DF5+0S/eABFY36UryB9wNsI6MFJCYjv0h622T/QwNCpmBrAb3FoKcjPzQglTWl+FZUH4iJCv03UZRjqUVXzpGhAS5DTr59pvsCWPK2DaPD0+CgAIstQzyXgQJe748PTIPaondkQWYogORUatfCwQGqoeH4ICm1uKfDkUcAmAi3a+EAAcOePgB25mPFtp3eQWrw3oDjJus8g5eS/XZOODBAXbwJmHALdweUu7inhZInowFUhwSokcN20wEHqEHvkDTISiMCbKbB+l0UAr/XqgvAznxA+NI9EsAGE4UgY6iiHtVFFejc3vX+ALKW05GHD4hxFO+RC4ferj71xPoCSBktph4KoMA193Z1zIMtt/oFaK4/DEBV8oaOXr/3xAi/gmLKfQkyACj/3GZa/NAS/YH/5M3YyxsTqfsDCNXOaptEODTA2IsiszR6fap/f9IEbNOuPzE0QE22GGWyee1+oT4lekZ2RwV4vVRmFO/7v1E89wcQpOYWXS2niQwwyCQ69AX6Brj22AFfesXWE30eA6DH33pgbZC16NAAfd7bD9MaAqDhCiXaN6s/iR7FHAWgqHcCpH0DLOqNXbGRAzKi9U+D0cbhkJEDQrM6A8a6BDxRW7Z/iICMT8XiTxSAY748/Ng3QHlRegiAVKP8Hymu/eejHpC66NF3CUj+3Xrm2vAA8SEuUHOvHP6su53b7fsH+LPadLLfcAHhOCuHOxNhnAnJp5q7+ge4L41Ag66Q73obYoc7R14JnwNRj3euLkbVugV88wAAX4SkBjPqDNgdn/wQAA9CjXMF+gVIdhpP3qUMDXDFrd55OmXXgKuBEaQJ4xag12iYLNA/wBHkQaERcIAa/B/gUAAHaKKBlj3eAU5CuB1kGu/C/KEBxWECvpFGAei/Abj2P8D7AbaSRwEo//zDAnbZ4f1Zuv0Yh0cGCN2lHxIw1W136a3YctbvAC++3AIMDxBQd0lDB3Q1AAoDA5T9jdOlBw7YqMHBAbJQ9HED+vzG8K8uudTUjSxWavJ8uX4BttvL8ABhs9sDJ/0CfBkYwfXBYQKWwj2liW5uVh84YMcZsYrG6K679X2SLQF19Wj/pOMDBwYLON4dYI/TSFIH2vuOD54cvQaZxuQ3vcx0Uv0rVDlqPaA6DMBuNEhkxVzsDTBB6aG7w8NRRw/IKCtO9DIZT/V6GG31lJUeAW8fpC9RlCrFUJsWtgMkjBy3vavkjoD6QAChSOoF0IVTzShLdLjLefCAnRApoWO9TGnmgDKl/9feCR+ABqnW020F0Nvx4OlZ8ba9gbQNoOi/AsRQ0WxqfGdA0nHOr6yZe+2srD0gyMe2N1i2G9n2x65CIGW0FHDd+UkI3QAS6mvrRh0BS97eAEUxtewAMr7y8pikN9xr2w9AimMF9wGM7bV7IEa7yXjusatGKFpxTx0MICGnPQPyhTLax6h2T0KQ3vpwEQqm4Oqo//GqujgIQKatty232gDWLWz5pE0gbXfxxaX/5HEWwTKLx0036gugJ9x6Jl4HQG5dWKv3ZKKgLim1eghy+vqoQXl9AySn7nZhviMgIC63ubGk3biojn7IF+qB+NJ0KlJHQB/TtDZr1WgKYcUTtdnSll0D4gSz11LjtcsuAHEyUNRw6S6XoAoNSb4bwPGYpjCqWRZtfqsrLur03iv2dAfolQZlpr0IqXcH7EY6AXpP13BkDpdzo82UyJhWfKXq9wM0mUZ2pFZxZrBPp1SlMN7ptHJ75YFLoUzu1BvowgfBSl+0zDSDBTSiuihJktf/9pfdDx6n8qN49wzFB8jBi/w00GlpsY6AUEcyedHbYidDegQurlrnn1hc3a0dJGImrl6F68UR32/+np/KBbXypQYhl74LNwU0osN7xq8uIqXX659Y3189Pt3dPV3dnwhIbR+1gtINIFHM5g/l0tVwbVgrhhgGPlTUMPgqhJh6As76XL0Dpr4DMvqsCaAohfXFD8MC5OtVOUuo8WWrRFxIzYganVbU6axBhoDFI6G+mAGcxqgLkrgannjyzmdS+oM+hvqGiTKN/nZtooYelcLhnVJRIbR48HS/9Yz3TvJgAGWZLodUJxwbeJPxyWkCyuhi6ZdXXkn9UQGv+aAMcfm/qohFrSsqed8+81ESe/k6FfaKRudHmLaWB6NBZjJy4FWjmFTdR++LYJq1Pa8ETo7PMG05g6OjjBLQEK4B8pJtR4Ls7504jTFSPDwJ97we2DUZMeCthU7XwqLqf+Ij1Bw76uWJ3k3kQQEyZS+0f6ARs/YqrLs6Plq3Kxk14A0FUvbrGNSlK/t+XHKz1xUHb8pIAXXoTl9XIPTIaAaq23743qU8JEB8Tq9WOul9rcFm8qAAofO8GnByYd/koQAyXCzT/PBK0o224zt3ltEGme+AlCpm7DTUcr5bz/JQAKHsTOwF1KYDY/eSBwNovpvAgfe+mifKSAHFS0BKzdOQ6or2J7ffkFEDUmLiw3uK+22fjngPGTUgv22aHrS7+HI/GS2g7sPnCcVq4x0HrnqWkQFCOBHVVJHIxDwMGdE+dB2gJ1mX6++ODtDlEtUJn2bGjts9k61rMQxn1SuO53JddZFHBWgYUVFKlSj17fQnvOj4PHpDcOFcLlH9rseRaRD0N76mKb6fOg8cdxJcpV6VJGewll8rBFF5h0sUGPGE+Jpm1+w3CuKcgBaLNd1RGgENQxSl8TVZ87yVGld2bUeCD1aqNw2HnyVg8qYmTtYXP+68Pj49rMvp8ZM3+4vrRym/oFDPT4vrb48m/F63N4DsAAuH18FHXA2LrvYHUFRxZdDxFUY9LdbQaCquaFR3zo2ogppC428/7pyO1dY8Pl+s6bVLOVZMCIzieB386PO8KNWeHf6yv3iS8ofDCFr32v4Diroo6S8seWWi+/FOV11nbrd/Yv3N6fs1T7GI0w8oLvaiaVrjnEhqyowK9GrJeLxWxLmLscTK08Pjj+tRvxfHXO+txQZA0N/EiiKvRbvv+yGc6p7YWz2sHRQvr1VCi/ExeBolza6wU/5sQ4ZzHBjHw6qp3jdzVuWMLa+8P9xZP/IG0Gfrpu/MbbiTa94ENAQoqidWiFnyq21qTzwKOif6nSQF/EcfT2sen/z94mS9RjfhLUimza8+M3xoVScxfQelw9X1Ca9bcmKRitdc7sB3A1CHBK9K4yuE/tpu6AWf8+pC7Yqcbank6fZGzVvSEZBaGp4dU/at1JY+HoUDAfRMo+ul+W4D4sU2NfWBmqVUa9sHPIglguoOj68/GeNsrOU8j3sCwm7xaYEaOiglRU/teDEavuMyizcAwf9SJUur+dssSAU1l+D2TiyefliW0cFoj3TdAKJnonviinWM+yrxrbxffQt+6UAaYsdQe9MH1dSv6H+iq8mXRHBKXG8vNPHxcMUHR8ZDwqEJD4At5kHcD7CFKMu14/WUl3slFLnt1wb9DiiKUSNUY1qpccldkWcPUXQj3FqPHtcnQDRbVGri16U9Pz5eCNdh7wYQ/S/8jlDIDw3+h/WM5E3t/afk4wOkowQkPMc4kMtPj0+8HXzyEhD+REPPiLUy3uh/kApSR6/fLaMxylSjXTxhf3CAmswchyT4nGAie8bejNcZmya2S8CooPoPoTa8usfi8hW8LrW/6zEJFCQycebfjBKwUWTf2tLbsFs1+BSF29rhgF4wZMG9ZGqJI4mjiThDHv5TpfDR65Kv80F6kr4A4oRpBRR5uJ8KS2K0YWT6ykTdqzHLd6TW8yGIqgb8e4cHYBFWPxrSRPqjQcgjsmlBnlwe2/G7pdsB5BJQ3I/R4rrk1J84q8id2n+WAJukVtOJfv2QfpmoqcmKjM/bln2l1VRArY8bOGuiOYC6uu6zzI9SNMp7BpJ74vU7H2EKnBwsLvvTkAbpE+BNiQEjrrbswj7cJWBKjCY0c9UNKQWSReDoSSk2KKjrMhBAhVqx0mtv2C1EeW8dAZdDoRVGlsK6CyrMiSXI5NTqV65rJwMBpBSXWy4+feMP8Lnmjok+k+kY9KNDr357AaWXMiinuyUDAcTyHDttZHl3LwT+yAH/S0gp5H679AILTIU4dcLgZTCA30XxHL5yh58QFouZa/88XumlXr6XDBxQYcVfV38jDCoej49YdBh+d10GDcj4bSmmxWsvdLwhud6VDBoQ+JipUV6XQ9ykjw8QES/HvIYNhzIEwNHKYwBkt15vyGMAbCsCDpsyWaNKfWCb4SgWD334BkZ1fNH489Jlmf/iJHG+rca34mNRmNsV+BQHp+i13g+8ZykZyjvpvJ9MHa+kzlFgHxZsomi4Hiz8IuOQLh7CGcfTYLcKDh9Q6ozTw1c0XGOGt9CZ3abhZXD4CvTZLAC5Wg8F0ahAvpXLBZmQ7d/LM/ztqTL8gLUGfFCegcA+D6/z/FvMonS+XKmen1EFCRh8NKlhU2dgE+zTbZQ3LH5CypcyV/izXN6GBJH5vbwBX5ELG+fV6sLMVTMmy79n4G04/jyBbaYu39O+lf+G33/H0XnlAg5UqO9xobzNvjk/bpxpyDODbdoACvoNvjg1t7DgfJyFvwKZtu2FjMJmkkm+78KsbU9rCDhn5+0v8Aob2BtcY4qilXNB2w4mpy1u8PDRbAHOPzuz7WoGoCv2lsXVA3sJgkQiycKknZwnAPjcPgfys3gkmAsG418yzLmdbc5OFqBsm7ftKVJI5uMXoJ4FO2nRaTuZmc4nZ0zQUNa25/9IwqFRnm/jgfGXSPLvDJWn4nk7mA9WL2TYWTxTxg8iwWA++akSzAlkLriZnGFkOxmc5Ccvks7nCmio8EG6QllmNh/Jb/CTzUg5kq4ulGcjkaxzMvJp+wzKE3aWzMNbFACnoY8AZrVVqVRzm9Wtra3CVND+A7SQieenCZuJp3OVhbnZdCTLGK/bFhBQIfPByCTJJNOb55wnSel0Pq5NReysCf3hSn42Mx+3cX8gABjchNfKZt6eZNCK2YXs12B+WoOd5TIbFfggXa1Utv6cj6QBMLKZ3tLYdhwOIMv03N5MB6fQvudy6c14gc7AS3DD8ZeZZLpSIORi0/6cAROfsnObwXOwLzIf2YRtGQUNXpXQF8ncFH5tMhL5gzEHkFaAA4yuUA3Gt52otxCJgwbJfBIBI8F8/IyQbCROyXQ6bhVm01U419vxYJnMJIOf0PGgWgDAeAYc8ixpL5A/0UKYtWU/L4AGZ+F9kolHpvnOp+uAyTOFAxIZTseXahAUJ+MHm/DVqchfm3bWceqNYOQMogDdyIJTypktu7IQjBcUDpjGfQIguQScSUamcDB6Mpj7A361PufPwU7SFV62fQpGvjnDFLgHeOEaLCSD6Xw1wwDQgsYlM3Q6koQTMRlJnsH+clPcjEDf0xEABBMK5spk3o7MXWhke/LPjANIADDIAbVCHE30ryrslAOCPeeS29lgZAY1GKl8BbLpyNfZS0CwmgJGSyfQXsSDU/ORYFZGwNm/0nA2rmuQA2oIuDm3sbHxJQeA0JgsWrBSiKennVNxCRhBwHi6mgN/uAS0yJmN1nOeni0g4Hl2YyNb/saAO35RKGyXc7kpVqjm0vFKdgZO3G1ARjZQg9WpeDDrANJKvoJ7WnAAv9gVa9b+9PkSsJKG70NgVahiWiSbT25nwIbAZuaDs58+g3LAB5sApvN2PhJJp8/RqM9wXJzA9yrOZjcBI58qcBKvNMgKufwWBe6yhv6Rz0NoiZyD6UU248lkMpfbKkB8nIV9p5Nb2/JtQMIyqMGqVYnEz2btSWxUEFgqm9UMBzyz42fB+MWlBgn6OjiqBvFSplo1v4Xty82YoBlQfCT+qRJppsH0bPXzZ4hVABjMnSkQPRUIXRWn9FiIgHYY4z5YSNqT83Zw7jsgKC++DUYOLgGAmxC6qtUy+Gd+M5cM5v/KZiDJ0kK2krPzuarWoEFZgzQRrIKzpitVBFwI5iuVyl/p+DxBwAJYRbCauQI8DzomOnNhQRJM5qu4bW5BRsAZC5T5NX3eCGjH5y3LAu2ckzOwaAbpnF0kMabiZmXUoHXpg/YkPc/Hv6YdQEhXZxH70xz6pbM/yhM6BqCLmWp+dhKVVChotDBZSQfnGwBN5gCSaQiVEPAz1XQ+DVaQz5+jBkG1EEHnrPgl4EYkcgZdWHL+eQsiFmwbse00ahU1SCZhJ/lbgBhk7Nw8kZk1CwG3EM9XIOkyMpULfnM2K4NJKpBoLgEZJMNcnkfRJLgVqPrrZr5MvwPi5GcMMsrFbDo3z6zy588ZrEdyuY0GE5UVDqgxsPI0aBA1ufB7uVzJ5QoIiHkvOFUHhPM9E89XC4Se5fJVCwMCVgxbkIs4INW20mnQUtMoqkGaAECylU8ugDbOZtPJgrPZVDK9AIljLpKc4YCQJHL5SB0QLKBsb27akAco7O8T73zB37l8PEOVqVwampO1I1MWfis52VyDdhWSAu50EjXPDzuVA6Q5uwqNg1LCigfriZ5mg/nZ6fN4HqL2JDoNpru4XcHoOKNYwB+ZrlehYMdJewqrlUlI9HDieR4kF7P5ZPW8Ek8ns4SnCUjA+WTlvJILzhZoAasNBnbETTSfxMHyeXA9sFBKZiK56tfKV3BDMMV8Duo7OKNQL4BVQO1QyaU/F7A4uQ4I8V5gfwOgFstUoVQqfI5U8Kis8NmuWnP2Z+3iORig9dze4P5iKdpcMof1V1bTKjb4I+QkayuY3J63n8+A5ZSTdr2Igw8ckwJrtO0ZsKvMZyjVZPNsNgIxNR3/YsWc8RltMolFXXB2XlEKz0ELWBfZzy3yN9Rr2NjPkVwZMxMEmQhK0P5GppPPM9jOeATqtimo/kDiZ+BWybgDaHNAcAwhM/llA4utP7LZP2ay2XkOTiaz2QJ8QK2NLNQXkNd5VYWjgfML59MLUJZnshtTzrYzG9k/C9nsNnQ9Ctkvk7R+5YsVNrKQTpkJe90GzgzuSpMJFMPn07A14yUJ30F2Gt4pKBbLLHyZ5+fkS1bLTGZ5BUyhLdt4ZDhGXWbIJGyAXz7LZidl+SJ7/hV2ALuE9zkgtMOxI+3/ASIX+qVoKyeUAAAAAElFTkSuQmCC"></img>
      </div>
      <div className="sidebar-list">
        <Link to="/admin" className={'sidebar-list-item'}>
          <span>
            <AppstoreOutlined></AppstoreOutlined>
          </span>
          <p>Dashboard</p>
        </Link>
        <Link to="/admin/customer" className={'sidebar-list-item'}>
          <span>
            <UsergroupAddOutlined></UsergroupAddOutlined>
          </span>
          <p>Tài Khoản</p>
        </Link>
        <Link to="/admin/product" className={'sidebar-list-item'}>
          <span>
            <ShopOutlined></ShopOutlined>
          </span>
          <p>Các sản phẩm</p>
        </Link>
        <Link to="/admin/order" className={'sidebar-list-item'}>
          <span>
            <OrderedListOutlined></OrderedListOutlined>
          </span>
          <p>
           Đặt Hàng
            <div className="admin-order-new">
                {totalNewOrder}
              </div>
          </p>
        </Link>
        <Link to="/admin/chat" className={location.pathname === '/admin/chat' ? 'sidebar-list-item active': 'sidebar-list-item'}>
          <span>
            <WechatOutlined></WechatOutlined>
          </span>
          <p>Trò chuyện</p>
        </Link> 
        
      </div>
    </div>
  );
}

export default Sidebar;
