import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("co1", "Japan", "#e53935"), // Red
  new Country("co2", "Italy", "#217926"), // Dark Green
  new Country("co3", "France", "#1963a4"), // Navy
  new Country("co4", "Mexico", "#00897b"), // Teal
  new Country("co5", "Thailand", "#ea8126"), // Orange
  new Country("co6", "Australia", "#6fff76"), // Light Green
  new Country("co7", "Greece", "#44b1e8"), // Light Blue
  new Country("co8", "Spain", "#efb558"), // Amber
  new Country("co9", "Canada", "#c8c3c3"), // Light Grey
  new Country("co10", "New Zealand", "#8e24aa"), // Deep Purple
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "co1",
    "Kyoto Temple District",
    1200,
    4,
    4.8,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdYinScMAyEgxybvZ2Aj9xAqTgtsoMghKktRay3ZLUa0gAQN-WJeWJDlMOxTiEaAEMCFnu9iHAtZVyWq_S7_KkywXBAHCJAy-ycPspVadxz7t_fiP8T_kPyBxAnMOJBYWbO4dmm7tErDaEj=w408-h306-k-no"
  ),
  new Destination(
    "d2",
    "co1",
    "Okinawa Island Depot",
    1500,
    6,
    4.6,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfB0IMO24lAIWVxs8_xhncUuZYOsMcgGqVL-1xu0owolHyROdJIQSC2oIdumrz9J2TrKZ34bSF_Oww2C_KaLdP9jsCo6jUK4oFa3yKpJzptrkytd3yqIAyz7iNPkY3PUgFNGq4=w408-h408-k-no"
  ),
  new Destination(
    "d3",
    "co2",
    "Amalfi Coast",
    1800,
    5,
    4.8,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLf8V_ddGpTQ1O1PT2y39kMO2j5UK9vgmI_mMNOU4E13Bn2sOggzw5lJVb5Kw1_gm-cbQVsyMMhjhu549O04H4HpgZniXOfthkjjMbhpQF1s2WYyOMSqmetUyhx8RwsxkDcoHJM=w408-h348-k-no"
  ),
  new Destination(
    "d4",
    "co2",
    "Florence Art & Food Getaway",
    1400,
    4,
    4.7,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdFwrHjQtZGuDcBokx1wC0qdx8kKwwwmv2DHAWHpFGbCDDX-qU81O41jz9gFqsL2HtDIgc-jwqIq_hy_T1Zb4e-jHyMpDcKBBjgemBM8xUToExc3B2htSXX1xUtsBKRw16Q6epY9w=w408-h272-k-no"
  ),
  new Destination(
    "d5",
    "co3",
    "Paris City Break",
    1600,
    4,
    4.7,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLepXsapCoIXKZUV32wnG7iEY7zVl1LAKVqQacOIsDG-v8xwcLRB3whbPFDbW19rJGL_nf7OvGl-PdBqKw8QYsM2Noki6n0UR3yA7Igmeg5NHT9BeH-ETb9nSd3NbL616MjdN1vcGA=w408-h543-k-no"
  ),
  new Destination(
    "d6",
    "co3",
    "French Riviera Retreat",
    1900,
    5,
    4.6,
    "https://lh3.googleusercontent.com/grass-proxy/AIM7gW2aJs0z7DB0f7cTElulf4a8LyvSTiUaHxUBOyKQeKBJV9CunPKVuoMcfIJJmbloZWvqlErKgb_Bh72_cZVqlBFCmA8Eii2bCCalN7oo7b8KFAaYZI3xLoRIQd39svaGtvEwbWq2gkG5QBPicSBoWXlgvbSXOIDo3PY066E9HeMVkhCDSFtXGx-bhA=w408-h306-k-no"
  ),
  new Destination(
    "d7",
    "co4",
    "Cancún Beach Holiday",
    1300,
    5,
    4.5,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfiYduAcBFk6W7NAxdMlbZRl7APNujFPTgJiaetKVems0PxwPVi9XldZZfa6iujqLyoyGzXSrzcly44jbWXT6eNLtUeVr3wojjJr6AW9_Ssh7-aLATJvUiKufQ4LD0XFoAcAoRNig1gzrGp=w408-h306-k-no"
  ),
  new Destination(
    "d8",
    "co4",
    "Oaxaca Culture & Cuisine",
    950,
    4,
    4.7,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLd9RDSwvvn6wSAkPQfyIKgQHjq9yFb820LE82FP3M9AQ-JUkKEVMLPVgOdWVb9VvIkuJ49F7QGlHOqPxUn3xliMFfl3FWdXM2Q1bGSffGyjYU4fyHCIx_O11fueZwFIP-C5HdyRE9nUk28Q=w408-h306-k-no"
  ),
  new Destination(
    "d9",
    "co5",
    "Phuket Coastal Adventure",
    1100,
    6,
    4.6,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfyJkz4GYtXGzvEK_h9KojctYXcqM_Yw6gKwF2K9SM8xFG1oOa3HrIX9VxQTID-dS6WRBme0GcZ5_ph0mV0N7TnKzLxPpXDNSmG1r8ffvgZcJiMEibrB1goq4s5lDxEXwKFsDd338jKBKhi=w408-h306-k-no"
  ),
  new Destination(
    "d10",
    "co5",
    "Chiang Mai Highlands",
    850,
    4,
    4.7,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdA9eeT5wXDiLz4T2oPCyiP7gxLPetRmgKIJk3t0_2zkXf3b-_thwurki1FTWe-xe_IEKbyVvdqfZakf7h6vVHmTFjpjUUUav9J4p5gerretCmwQg6gGnXwALEQuZa6fVTMtm54=w408-h272-k-no"
  ),
  new Destination(
    "d11",
    "co6",
    "Sydney Harbour Stay",
    1700,
    4,
    4.6,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLf9GEH457yeYBW2lDEW12_Mc0z52TOD8RBtcObcrjFSzhUcWa1pe0X6vCtWnJUTOC8qIF7Ju7dd9M0PzrqL9ANcmGAmC2orkOTm0EvMRz1un8dqtFNzjqxcL7553AS2LjoJFtGDNuZ4tNlx=w408-h272-k-no"
  ),
  new Destination(
    "d12",
    "co6",
    "Great Barrier Reef Explorer",
    2200,
    6,
    4.9,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfv4kW2HMvAZTKq3uudesHlEeZ9vSC1xDlhsq2OQb38G--ScSGsKtdJ2Wl3-0rIYjIp3UeK12M1Rn5xSMpVq_q-UE0QWzbT1cvn-9y-wDfNzKUBsi37xQ24gAsnMCTfckKfDe2pkQdJCVY-=w408-h272-k-no"
  ),
  new Destination(
    "d13",
    "co7",
    "Santorini Sunset Escape",
    1800,
    5,
    4.8,
    "https://lh3.googleusercontent.com/grass-proxy/AIM7gW3rbUjX2GgjfqkZkGaxznmhk2vfl1t_4hjgQLgQYiRbavTjHbjdKQsQCJOxfDGGQpwNsB_rzw2skIqBiLgvr8QK4RhjusHqXopkW2js9emeZLPfOhk3xThT6Nb0oKXmGLp49lxjrBWW3IEXpNVqDWqGpf359hCTqMU8O8d6VvlxzfC7_ABo6fWD=w408-h271-k-no"
  ),
  new Destination(
    "d14",
    "co7",
    "Athens History Tour",
    1100,
    3,
    4.5,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLd-aPBaBGuP_6ZDd0X4Woz0cDhoYNPmLyDGWB9WUSaJoCzWQI3-NuhB50ApnEL5wEAtpzfMtQf7MApFcSDqY8TbUTRp51MlKHpTh82IXxqo4wM2uzYonB-B7aTf-tY50jeGAnUS0g=w408-h284-k-no"
  ),
  new Destination(
    "d15",
    "co8",
    "Barcelona Architecture Weekend",
    1250,
    4,
    4.7,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLcT2zEt8t0cWERv2cdZNYjTMZMl0OHDWS7AQ1QSFN6ojPQoznjsnROqWYseWYckdBxKdEVKWOYH_98hIwrt-8FopS_0zUyQioF28tpTNivj50kneJfYONDc9OKWNjj-wIYMgl6fGOjhucLJ=w408-h541-k-no"
  ),
  new Destination(
    "d16",
    "co8",
    "Seville Food & Flamenco Trip",
    1000,
    4,
    4.6,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLe16QlnIJPbNxptnHhlcejifEDVLNq3WVavNnwC1f7LU2RhA8lK3-UncK3xOzC6WW-AP11d96iayzA-za3uDonv3vzP8ocTj3ouj4g5ub2rcQu5ZMRae9PAkZtbmO1npcXs_cfQeHcvvjw=w408-h306-k-no"
  ),
  new Destination(
    "d17",
    "co9",
    "Banff Mountain Getaway",
    1600,
    5,
    4.9,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLcDIOhC2Rr42lbdsgW1eBQi31shpXRRi_ilMWMnq11w4o5GwnLWB-6GOu4SxerQ94DVfHqpuIE3tk8voiCu0fk8UtUeyvAcYV8L9_LL0P3_je3b37E0QJ-n6jMHSfXRD5oVbA=w408-h271-k-no"
  ),
  new Destination(
    "d18",
    "co9",
    "Vancouver City & Nature",
    1400,
    4,
    4.6,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLdl1sxLmfxZrY_3jcGk89HF4ApJOTcb856hU__mTcZPB3__32IxVP07FOjXWHRvqd2z8zZfeIt8SG3GHvPtHLoHC3eMvcAMnP84XRwe5bsO3TD6rq2vqhQEaKSuYtlUzQTTA6iZLbV81r0=w426-h240-k-no"
  ),
  new Destination(
    "d19",
    "co10",
    "Queenstown Adventure Holiday",
    1900,
    5,
    4.8,
    "https://lh3.googleusercontent.com/grass-cs/AABkmLfnwl183vwyas9tWGYehaRUZrTfBySPYJGwDRSWtVfyes87Bq-_7iYg9zt0ZfAStqQiYHW70VV_9JXVZjzmFgaRCQJsMdxyAA9nZNSCAnP91E7uLMrDne9BYr1GFku7roG36w0rkw=w427-h240-k-no"
  ),
  new Destination(
    "d20",
    "co10",
    "Rotorua Geothermal Retreat",
    1300,
    3,
    4.5,
    "https://lh3.googleusercontent.com/grass-proxy/AIM7gW2l9PFMQ34QHwo4rGX3EWG7JPmusS1jqu3rrBFZG8L7Qwef1NOd-vDK4y1O8wtaHOmv7YdVo4gFIY1YrxICYHwah8QtjB6b3EdD-P37slIzWM8Kx32a_XTtk7-yGJ3iG8buCd6EROrJScHIBg8tpdZJZowHflzs9q8G_MSFxN5lwILegrwai7o=w408-h272-k-no"
  ),
];
