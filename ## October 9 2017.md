### October 9 2017

* Dependability: service accomplishment and service interruption
* MTTF: mean time to failure
* MTTR: mean time to repair
* AFR = annual failure rate

* Availability = MTTF/(MTTF + MTTR)
    - number of 9's of availability

* RAID = Redundant Array of Independent Disks
    - Goal: better Performance (faster transfers and/or reliability)
    - Levels 0-6
        - RAID 0 : "Just a bunch of disks" - striping 
            - block i is tranferred to/from disk (i mod n) 0 in parallel (where n = # of disks)
        * Level 1: Mirroring or Shadowing
            - put every block on 2 disks
            - REad access can be improved
            - reliability withstand 1 disk failure (more unless both disks in a pair fail)
        * Level 2 and 3 skipped
        * Level 4
            - add a parity disk
        * Raid 5
            - distribute the parity blocks
        * raid 6
            - tolerate 2 disk failures
