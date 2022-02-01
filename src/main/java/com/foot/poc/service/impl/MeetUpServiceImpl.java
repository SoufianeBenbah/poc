package com.foot.poc.service.impl;

import com.foot.poc.model.MeetUp;
import com.foot.poc.repository.MeetUpRepository;
import com.foot.poc.service.MeetUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;


@Service
public class MeetUpServiceImpl implements MeetUpService {

    @Autowired
    private MeetUpRepository meetUpRepository;

    @Override
    public Collection<MeetUp> findAllMeetUps() {
        return this.meetUpRepository.findAll();
    }

    @Override
    public MeetUp findMeetUp(Long id) {
        return this.meetUpRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteMeetUp(Long id) {
        this.meetUpRepository.deleteById(id);
    }

    @Override
    public MeetUp createMeetUp(MeetUp meetUp) {
        meetUp = new MeetUp();
        return meetUp;
    }


}
