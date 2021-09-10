import React from 'react';
import maleIcon from './male.png';
import femaleIcon from './female.png';
import './style.css';

const User = ({ type }) => {
  const man =
    'https://download.flaticon.com/download/icon/1077012?icon_id=1077012&author=256&team=256&keyword=User&pack=packs%2Fsocial-network-11&style=6&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&token=03AGdBq26bcnrgYZ7fajiwSJfZ2JLvE3nRuVS0TJYpT-BFQ86vo5oncVKXn5wHOdgde-3m0WEBYZonEE2vxT2Co9ijQNevke9fyl-4_6mBp1g7yolX4eMxI9OP1ZzDSBcCAzWeRk4v9IsZm3XliJ9C10J5Gt6W3QTT1ZEV9iCSHiE7tcOxoUeAsUd5JGq5nh06-mbz_BoLVkbb-Dh4_03hjx0vl7p_n3XzRhM3tgAhpoa1YNeFRMr_Mdb-DXPHd0KDwxoT8NMCEw3Tu89ETfXMj2YXBh2hVuWEmeoRL_zGne_NKBK844RtKqO_M53Rg3oRI4cFLWw60gOd67iKM3rg6yayXHYEQjbtN4J2xmLnx1QezD5urS1hvwFmaBlZMcvPJfC5TACgL5EgnRM0bkkxA2MoPD3dfPeZwv2Akgv9DEXowrfFYIfpNkznAEvCIWXeNQDO4w2oslgT5YPJxYpAaaH2witS_FFOCTfZfd_Mv2DLo2u4n62uFaLgGaB3uzMCYvFTIIOc4mcSPso4OjkYcZdCUaRzskrzH363_0ZFeGcv_dItKKy-vGbtgW_ib-lW5g2i1GW0zAGwzVA1bqqZvGbsocEd-FggSFKpH7VDLgS7Ap4C-j_iiS3Y8V3sXSfxlTHgjnxO-5xWaMJVi9GcBmo-V1jZURGR-spNqDLL2iNLqaPmlv0q8S3V_UsX2RelWcgZfUoxkD2EG46azFNef20-I4zUb2Ax_pCdE4Sk-nubs-uVkHwkaTScmHxXvvymCwBMQLuhhwA7UeUoCcq53MbOuUbllHQHVPkpNCWIvqMsPYzvL4bhljTN5mcn4kih_OFvJh4saH2fAlxcmjKmQC4RMBIa3tNH7rw8UCSIffUpkki5_GH8c2SLWGI4ra8aQF9JsuWkVblU53yzex5n1VJzokUrRL91wFG1kpHUTmxzCJarEPKtch30rTEbm_hgeOg-3odoAFLSKiqVTEpRupCqvcFblDlKKm1a7DZmt30AemV_Y8mJT-lc1PtiLJ5TqsMFGp1-vm3T21kC4IvNR59vPGe_VTRC94GZReAvCyf6TZMtFTdwzBfjmZ1uGomfa8obKElPV2kf4e1-280muWcd5BTrLoPN3-viAKq188finsjMfWafuSEprThMVvEW6ZVZGrhy2BtAWda-aS6eH92Z3R65nG6UNzWfBpAQOO1d_m_8Q_gMLOKiLjnZqdFmzqiERSzZGv-1oSxASof4_RpkJ1yjfR93i_8h73IevXAQ3CUsVY6NaWh_pnK60DZjJzUnwwSjPHcGsgThUMCnZ51ca8qjrsO7sATeCnWD2_aQcVPoDQUhrVp9WALuvjGZZpdmkfE-SOU9CBQf-Jn5zOvlpB_jQoxJpnXWXksU-cfaC9-STMfNpVv6KWqpTDorLGILKGlmGnMoXlVEPs7XJ9Ykk5htCiVns9goNgHPByPUbdew1F42PfpgTWOv6jh5OnnIi2S9QKgWjWcphEYHzIU8t_NPwt6_l7z8oqfvlzNmSpNm_qUeiEhyYw2FfOkDWXvUdxFqNlVPPvsbV2EpMx9WRXtsIJsuSyRpC7Jp1ycofRsG1Y5meaY&_gl=1*u901cr*_ga*MTI1MjMxMjAyNy4xNjMwNjk4NzE5*_ga_3Q8LH3P0VP*MTYzMTIzMzUyMi4zLjAuMTYzMTIzMzUzMy4w';

  const woman =
    'https://download.flaticon.com/download/icon/2922561?icon_id=2922561&author=299&team=299&keyword=Woman&pack=packs%2Favatars-92&style=522&format=png&color=&colored=2&size=512&selection=1&premium=0&type=standard&token=03AGdBq27Wzcjn0DqVm1P8oyyFkRjsb5CtPfokTZe2MNnW3aoH0BlkYMwkqfVZZvD9737nAqp8nyatYz0QTuU7ZF5HR9xYL6xrWDcJsUmAn7AXbHvAM77h2b6JUetwFsuDOllEHL6iKQ99uHWlxV-mW5g9bKeiP-t2x84_kkNK_5C9XndXLqoT0xiytzhCzhUjz2za8OOssH8MdlXaZgsaJVsOwUTnOnfQOWjyFTeYB4LWWUlUsCv6xtuYDXwsTEbdNbSudVxKzEioW5RdcQ8gYid0jiH2HpwP21tGySzFFdVMnPFaw_Df_IKcupIQYNzEaTl3QlkCRFRiS_hEZ2rggMnQ2qyz__KMQ_xqha0HlV4RB3DTZHzQn99v1C3SVqdSeSst3EtPKNeUzqPoADWq2VIMpXZ9WzLiLYGFdS5BXmy424W5-KpAlwkqF_WLQ6twcdqtBsXdw6aEM582G6ehHEMbfizaEMUetRIWNuLuoFHY4zInz-kt9TaK5veB2rbVTXPdUyvHPD52VRo-V0-agAcBWGBv5fXT8SRSsA8cm08xzmGATvOhSE5aGnjej2_pkiQhnktOEv_CSTxEi3rA4skEF9ld8ce_xd7pA8IwPvD_h0dwg4T_wa485CQGhXV1MipZjulWWVPfANRwvV1WkdfukfLIRu8ipe0AASbEzDLdBXmf9bjqT4CtC3rMJxXZ4FT98HBsea8f0HNPTO6SttO7IVaDURifLUXFSMlSg2c68J2ASFPihW54UJzAxj_Uu-51s9vpYdIuItofhHrf_shHhIPJ7DMPlzQXClLpKGTulR9l-tCA3AfP8QcZw6lJSXXgc67FFn_8BhKTeabISlRvMKTtY0Q4-FetGqAcAeZv-uuE2pEpkAMkp6OJDv9M-Y9CM2XFR55xf07Qg6rJb3Dd3LDmh8o0CVORFjA0HGYsCYX7qXQRLal9e-8UtNFI3NxQOdHuDo_PNGbUWYAVONjuFQ8HaKdvn0RXO3rayaER_5jbJqkAgW3aBg6CfPfAMcFi2pMDGTxfd0_N3SEN4nQZgLKBZJ-o-JyAnhQTBBQdsei2JlWlRt1pg05hvSD2AeMRxwivFtfQ1dzU-qGPhDrLDxHXbA0aJfsF6H_Mae4lO3STMUvc30XhrHna8DTq_YKshc6Uhk6HY_EI_2c_-2poLZmX3ntT-5tKMZly71d1CkLpNZw8o--rXM-fDFr1EKi7dGB8V2-55DFKe5IdoZKmWk8-hfuwc99b-h9EEjBvmMveMn2Og1IKC0TkUMllkqfn9OoqEuJDhPDn08JDrhU-EQWiGNjZP8LQoLabRO5aPvOgbZnMgJaH7MiWi59UyWlRmJcU6fGnHfexnOu10SQ0o4KXLXgk1p1aOm0sqaWQ4yje3lDA3x9npYRhXa_9tf33GM5IpO-1Ru3f68-cn7ni81J5D3IChJZS9GU0YjLQ2wqMn1Q3QMbEzFKvLg_ddUfb7geQHM68b8y1eWQl39m3B8rW0T5x29NH6HItba1hfF88OXDuxoeAX6RGo7w4c2W7oRBr8ZmlTG13krwGUgsX0iaq_P_afWS8ZNYo_E8eJALoWu3cfns&_gl=1*1ylq03w*_ga*MTI1MjMxMjAyNy4xNjMwNjk4NzE5*_ga_3Q8LH3P0VP*MTYzMTIzMzUyMi4zLjAuMTYzMTIzMzUzMy4w';

  const user = type === 'woman' ? woman : man;

  let imgs = {
    man: maleIcon,
    woman: femaleIcon,
  };

  return (
    <div className={`user ${type}`}>
      <img src={imgs[type]} />
    </div>
  );
};

export default User;
