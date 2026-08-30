# Homepage equipment-record sources

This note supports the mixed-equipment records shown in the homepage `Retrieve` illustration. Manufacturer data is kept distinct from the example fleet year/age field.

## Manufacturer-verified fields

| Brand and model | Category shown | Key rating shown | Primary source |
| --- | --- | --- | --- |
| Toyota 8FBMT50 | Electric counterbalance forklift | 4,990 kg rated load at 600 mm load centre | [Toyota Material Handling technical guide](https://media.toyota-forklifts.eu/published/24947_Original%20document_toyota%20mh.pdf) |
| Hyster J3.5XN | Electric counterbalance forklift | 3,500 kg rated load at 500 mm load centre | [Hyster product technical guide](https://www.hyster.com/globalassets/coms/hyster/emea/documents/trucks-literature/4-wheel-electric-forklift-trucks/j2.2-3.5xn/3990057-j2.2-3.5xn-a276-tg-rev08-en-online.pdf) |
| Linde H50D | Diesel counterbalance forklift | 5.0 t load capacity at 600 mm load centre | [Linde H50–H80 product page](https://www.linde-mh.com/en/Products/IC-Trucks/H50-H80/) |
| JCB 540-180 | Telehandler | 4,000 kg maximum lift capacity | [JCB 540-180 product page](https://www.jcb.com/en-IN/products/machines/telescopic-handlers/540-180/) |
| JLG E450AJ | Electric articulating boom lift | 500 lb unrestricted platform capacity, displayed as approximately 227 kg | [JLG E450AJ product page](https://www.jlg.com/equipment/boom-lifts/articulating/electric-hybrid/e450-series/E450AJ) |
| Genie GS-4047 | Electric slab scissor lift | 350 kg maximum platform load | [Genie operator's manual](https://manuals.genielift.com/operators/english/1278042.pdf) |
| Bobcat E50z | Compact excavator | 4,819 kg operating weight; this is not presented as lifting capacity | [Bobcat E50z product page](https://www.bobcat.com/in/en/equipment/mini-excavators/3-6t-mini-excavators/e50z) |

## Fleet-record boundary

- The year and approximate age values are example asset metadata, not manufacturer specifications or claims about live Antbuildz inventory.
- A real implementation must read year, serial number, hours, condition and availability from the connected asset record.
- Forklift suitability still depends on the selected mast, load centre, attachment, load geometry, residual capacity and operating aisle. The interface therefore routes the closest rating to sales review instead of declaring final suitability.
- Platform capacity and excavator operating weight remain labelled by their actual measurement type; they are not compared as though they were forklift rated loads.

## Reason-stage qualification checks

The homepage `Reason` illustration exposes a customer-safe decision trace, not private model telemetry, prompts, scores or chain-of-thought. Its visible checks are limited to the industrial facts that influence whether the Agent should ask for more information, retrieve supported options or route the enquiry for sales review.

- Forklift capacity is tied to the data plate's rated load centre and maximum lift configuration. Load size, position and weight distribution can reduce usable capacity; attachments can also change the rated combination. Sources: [OSHA forklift nameplate guidance](https://www.osha.gov/etools/powered-industrial-trucks/types-fundamentals/parts/name-plate) and [OSHA load-composition guidance](https://www.osha.gov/etools/powered-industrial-trucks/load-handling/load-composition).
- Aisle suitability is not established by aisle width alone. Toyota's calculation uses the truck turning radius, load width and length, load distance, internal turning radius and safety clearance; non-standard loads require a specific calculation. Source: [Toyota Material Handling aisle-width guide](https://cdn.toyota-forklifts.eu/guides/aisle-width-guide/).
- Manufacturer right-angle-stack tables likewise vary by pallet/load dimensions and add manoeuvring clearance beyond the zero-clearance value. Source: [Hyster reach-truck technical guide](https://www.hyster.com/globalassets/coms/hyster/north-america/documents/trucks/reach-trucks/2015hbc2sp002-e-en-us-reach-truck-retail-tech-guide.pdf).

The graphic therefore stops at `Clarify before matching` while lift height, load geometry and aisle clearance are incomplete. The later shortlist may identify the strongest supported match, but final configuration, site suitability, availability and commercial terms remain subject to review.
