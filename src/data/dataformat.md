# Raw HDF5 data set topology

Each climbing session is captured into a single HDF5 data file. The file contains:  
- raw information from both sensors
- raw and post processed information from the climbing/non-climbing classifier
- positions of detected moves

Sensors are worn on left and right wrists. 

> Take note, orientations are in medical convention. They are NOT reported in sensor based (eucludean) coordinates. 

Each sensor contains an IMU and pressure sensor. In addition an NFC reader and button provide inputs.

Both left and right sensors are sampled at 50Hz. 

All datastreams are time synchronised in firmware. No synchronisation is needed in postprocessing. Synchronisation is from a 16MHz clock and uS precision.

## The **raw** HDF5 file contains the following information

```
Dataset 'acc_LH' // Acceleration on Left Hand
    Member 'timestamp': 
    Member 'AP': // Anterior-Posterior axis
    Member 'UR': // Ulna-Radial Axis
    Member 'DP': // Distal-Proximal Axis


Dataset 'acc_RH' 
    Member 'timestamp': 
    Member 'AP': 
    Member 'UR': 
    Member 'DP': 
```
Acceleration. Take note of axis

```
Dataset 'button_LH' // button presses on Left Hand device
    Member 'timestamp': 
    
Dataset 'button_RH' // button presses on Right Hand device
    Member 'timestamp': 
```
Button press signifies if got to the top of a climb successfully or not

```
Dataset 'classifier_binary' 
```
This is a binary climbing (1) or not-climbing (0) classification. It has been post processed from the raw predictions

```

Dataset 'classifier_original' 
        
Dataset 'classifier_postprocess' 
            Member 'timestamp':  
            Member 'p':  // probabilities

Dataset 'classifier_raw' 
            Member 'timestamp':
            Member 'p': //probabilities
```
These are internaly used signals

```
Dataset 'climbing' 
        Datatype:   H5T_COMPOUND
            Member 'timestamp':
            Member 'is_climb': 
                Member 'FALSE':  0
                Member 'TRUE':  1
```
Regions defined as climbing or not        

```
Dataset 'energy_LH' 
        Member 'timestamp':  
        Member 'energy': 
        
Dataset 'energy_RH' 
        Member 'timestamp':
        Member 'energy':  
```
Signal energies from acc. Could be used for visulisation purposes

```
Dataset 'nfc_LH' 
        Member 'timestamp':
        Member 'value':  // this is the UUID of the tag
                
Dataset 'nfc_RH' 
        Member 'timestamp':
        Member 'value': 
```
These are griptonite.io tags scanned to denote difficulty of the route and climb attributes etc

```
Dataset 'pres_LH' 
        Member 'timestamp':  
        Member 'pres':  
        Member 'z':  
        Member 'cand':  
            Member 'FALSE':  0
            Member 'TRUE':  1

Dataset 'pres_RH' 
        Member 'timestamp': 
        Member 'pres': 
        Member 'z':  
        Member 'cand':  
            Member 'FALSE':  0
            Member 'TRUE':  1
```
Pressure based data.

```
    Group '/meta' 
        Attributes:
            'session_id':  'e897d166-1618-5bd3-ba3a-cb7577c64647'
            'sensor_LH_model':  'CMX'
            'sensor_LH_serial':  202981216
            'sensor_RH_model':  'CMX'
            'sensor_RH_serial':  202981226
```
Meta data about the recording

## The processed HDF5 file contains the processed results
e.g 
> HDF5 e897d166-1618-5bd3-ba3a-cb7577c64647.h5 

```
Group '/' 
    Group '/climbs' 
        Member 'start_time':  
        Member 'end_time': 
        Member 'duration': 
        Member 'gap':  
        Member 'h1': 
        Member 'h2':
        Member 'left_moves_count': 
        Member 'right_moves_count':
        Member 'left_time_moving': 
        Member 'right_time_moving':
        Member 'left_time_on_hold': 
        Member 'right_time_on_hold':
        Member 'time_on_hold': 
        Member 'time_moving': 
        Member 'left_bias': 
        Member 'right_bias':
        Member 'moves_count':
        Member 'height_gain_total': 
        Member 'topout':  
            Member 'FALSE':  0
            Member 'TRUE':  1
        Member 'topout_height':
        Member 'climb_type': 
        Member 'tag':  
```
A collection of climbs

```
Group '/climbs/0' 
    Dataset 'height_profile' 
    Dataset 'moves_LH' 
            Member 'start_time':  
            Member 'end_time':  
            Member 'on_hold':  
            Member 'duration':  
    Dataset 'moves_RH' 
            Member 'start_time': 
            Member 'end_time': 
            Member 'on_hold': 
            Member 'duration': 
```
A single climb

```
Group '/meta' 
    Attributes:
        'session_id':  'e897d166-1618-5bd3-ba3a-cb7577c64647'
        'sensor_LH_model':  'CMX'
        'sensor_LH_serial':  202981216
        'sensor_RH_model':  'CMX'
        'sensor_RH_serial':  202981226
```
Sensor meta data

```
Group '/summary' 
    Attributes:
        'height_gain_total':  2.550576
        'topouts_count':  1
        'climb_time_total':  174.000000
        'left_moves_count':  38
        'right_moves_count':  26
        'moves_count':  64
        'left_time_on_hold':  137.140000
        'right_time_on_hold':  151.340000
        'time_on_hold':  62.700000
        'left_time_moving':  38.600000
        'right_time_moving':  24.100000
        'time_moving':  144.240000
        'left_bias':  1.093620
        'right_bias':  -0.093620
        'climbs_count':  1
        'intensity':  1.000000
        'climb_type':  'BOULDER'
        'start_time':  '2021-02-25T13:13:12.960000+00:00'
        'end_time':  '2021-02-25T13:16:06.960000+00:00'
```
Session summary information from all climbs. Could be used as a session summary screen.